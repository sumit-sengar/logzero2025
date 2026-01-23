"use client";

import React, {
  useState,
  useRef,
  useEffect,
} from "react";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Link2,
  Image as ImageIcon,
  Code,
  X,
} from "lucide-react";

import ImageHandler from "./ImageHandler";

const MAX_IMAGE_BYTES = 2 * 1024 * 1024; // 2MB

const BlogEditor = ({
  initialContent = "",
  onChange,
}) => {
  // --- State ---
  const [content, setContent] = useState(initialContent);
  const [showHtmlMode, setShowHtmlMode] = useState(false);
  const [htmlContent, setHtmlContent] = useState(initialContent);

  // Link Modal State
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [linkError, setLinkError] = useState("");
  const [linkNewTab, setLinkNewTab] = useState(false);
  const [linkSponsored, setLinkSponsored] = useState(false);
  const [linkNoFollow, setLinkNoFollow] = useState(false);
  const [editingLinkNode, setEditingLinkNode] = useState(null);

  // Selected image
  const [selectedImage, setSelectedImage] = useState(null);

  // Freeform resize inputs
  const [imgW, setImgW] = useState("");
  const [imgH, setImgH] = useState("");

  // Cropper modal
  const [showCropper, setShowCropper] = useState(false);

  // Editor formatting
  // We default to "p" so the dropdown shows Paragraph by default
  const [selectedHeading, setSelectedHeading] = useState("p");
  const [selectedFont, setSelectedFont] = useState("Arial");
  const [activeFormats, setActiveFormats] = useState({
    bold: false,
    italic: false,
    underline: false,
    strikethrough: false,
  });

  // Track selection to restore it after dropdown clicks
  const [lastValidRange, setLastValidRange] = useState(null);

  const editorRef = useRef(null);

  // --- Helpers ---
  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const isInsideEditorRoot = (target) => {
    if (!target) return false;
    return !!target.closest?.('[data-blog-editor-root="true"]');
  };

  const stopImplicitSubmitCapture = (e) => {
    if (e.key !== "Enter") return;
    if (!isInsideEditorRoot(e.target)) return;

    const t = e.target;
    const tag = t.tagName;

    if (tag === "INPUT" || tag === "SELECT") {
      e.preventDefault();
    }
    e.stopPropagation();
  };

  const clearSelectedImage = () => {
    if (selectedImage) selectedImage.style.outline = "none";
    setSelectedImage(null);
    setImgW("");
    setImgH("");
  };

  // --- Selection Management ---
  const saveSelection = () => {
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) {
      const range = sel.getRangeAt(0);
      if (editorRef.current && editorRef.current.contains(range.commonAncestorContainer)) {
         setLastValidRange(range);
      }
    }
  };

  const restoreSelection = () => {
    if (lastValidRange) {
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(lastValidRange);
      return true;
    }
    return false;
  };

  const ensureSelectionInsideEditor = () => {
    const root = editorRef.current;
    if (!root) return false;
    root.focus();

    const sel = window.getSelection();
    if (sel.rangeCount > 0 && root.contains(sel.anchorNode)) {
        return true; 
    }

    const r = document.createRange();
    r.selectNodeContents(root);
    r.collapse(false);
    sel.removeAllRanges();
    sel.addRange(r);
    return true;
  };

  // --- Effects ---
  useEffect(() => {
    if (editorRef.current && !showHtmlMode) {
      if (editorRef.current.innerHTML !== content) {
        editorRef.current.innerHTML = content;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showHtmlMode]);

  useEffect(() => {
    const handleSelectionChange = () => {
        // Detect which block we are in (H1, H2, P, etc)
        detectActiveBlock();
        updateFormatStates();
        saveSelection(); 
    };
    document.addEventListener("selectionchange", handleSelectionChange);
    return () =>
      document.removeEventListener("selectionchange", handleSelectionChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // --- Active Block Detection ---
  const detectActiveBlock = () => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;
    
    let node = selection.anchorNode;
    // Climb up DOM to find the block tag
    while (node && node !== editorRef.current) {
        if (node.nodeType === 1) { // Element
            const tag = node.tagName.toLowerCase();
            if (["h1", "h2", "h3", "h4", "h5", "h6", "p", "li", "div"].includes(tag)) {
                // If it's a div or li, we usually treat it as paragraph style for the dropdown
                const val = (tag === "div" || tag === "li") ? "p" : tag.replace("h", "");
                setSelectedHeading(val === "p" ? "p" : val);
                return;
            }
        }
        node = node.parentNode;
    }
    // Default to paragraph if inside editor but no specific tag found
    if (editorRef.current && editorRef.current.contains(selection.anchorNode)) {
        setSelectedHeading("p");
    }
  };

  // --- Handlers ---
  const updateFormatStates = () => {
    setActiveFormats({
      bold: document.queryCommandState("bold"),
      italic: document.queryCommandState("italic"),
      underline: document.queryCommandState("underline"),
      strikethrough: document.queryCommandState("strikeThrough"),
    });
    
    // Also sync font name
    const f = document.queryCommandValue("fontName");
    if (f) setSelectedFont(f.replace(/['"]+/g, ""));
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text/plain");
    document.execCommand("insertText", false, text);
    handleContentChange();
  };

  const handleContentChange = () => {
    if (!editorRef.current) return;
    const newContent = editorRef.current.innerHTML;
    setContent(newContent);
    setHtmlContent(newContent);
    onChange?.(newContent);
    updateFormatStates();
  };

  const handleEditorClick = (e) => {
    const target = e.target;

    if (selectedImage && target !== selectedImage) clearSelectedImage();

    let linkNode = target.closest("a");
    if (!linkNode && target.tagName === "IMG") {
      const parent = target.parentElement;
      if (parent && parent.tagName === "A") linkNode = parent;
    }

    if (linkNode) {
      const anchor = linkNode;
      setEditingLinkNode(anchor);
      setLinkUrl(anchor.href);
      setLinkNewTab(anchor.target === "_blank");
      setLinkNoFollow(anchor.rel.includes("nofollow"));
      setLinkSponsored(anchor.rel.includes("sponsored"));
      setLinkError("");

      const sel = window.getSelection();
      if(sel.rangeCount > 0) setLastValidRange(sel.getRangeAt(0));
      
      setShowLinkModal(true);
      return;
    }

    if (target.tagName === "IMG") {
      const img = target;
      setSelectedImage(img);
      img.style.outline = "3px solid #3b82f6";
      setImgW(img.getAttribute("width") ?? "");
      setImgH(img.getAttribute("height") ?? "");
    }
  };

  // --- Formatting Handlers ---

  const handleHeading = (level) => {
    // 1. Restore the selection lost when clicking dropdown
    const restored = restoreSelection();
    if (!restored) ensureSelectionInsideEditor();

    // 2. Determine tag. This saves as actual <H1>...<H6> tags in the HTML.
    const tag = level === "p" ? "P" : `H${level}`;
    document.execCommand("formatBlock", false, tag);
    
    setSelectedHeading(level);
    setTimeout(() => handleContentChange(), 10);
  };

  const handleFont = (font) => {
    restoreSelection();
    document.execCommand("fontName", false, font);
    setSelectedFont(font);
    setTimeout(() => handleContentChange(), 10);
  };

  const handleFormat = (command) => {
    restoreSelection();
    document.execCommand(command, false);
    setTimeout(() => handleContentChange(), 10);
  };

  const handleList = (type) => {
    restoreSelection();
    const cmd = type === "ul" ? "insertUnorderedList" : "insertOrderedList";
    document.execCommand(cmd, false);
    setTimeout(() => handleContentChange(), 10);
  };

  const applyImageFloat = (direction) => {
    if (!selectedImage) return;

    selectedImage.style.float = "";
    selectedImage.style.display = "";
    selectedImage.style.margin = "";
    selectedImage.style.maxWidth = "";

    if (direction === "center") {
      selectedImage.style.display = "block";
      selectedImage.style.margin = "12px auto";
      selectedImage.style.maxWidth = "100%";
      return;
    }

    selectedImage.style.float = direction;
    selectedImage.style.display = "block";
    selectedImage.style.maxWidth = "45%";
    selectedImage.style.margin =
      direction === "left" ? "0 16px 12px 0" : "0 0 12px 16px";
  };

  const applyImageSize = () => {
    if (!selectedImage) return;

    const w = imgW.trim() ? Number(imgW) : NaN;
    const h = imgH.trim() ? Number(imgH) : NaN;

    if (Number.isNaN(w) || Number.isNaN(h) || w <= 0 || h <= 0) {
      alert("Enter valid width and height in px (e.g., 200 and 200).");
      return;
    }

    selectedImage.setAttribute("width", String(w));
    selectedImage.setAttribute("height", String(h));
    selectedImage.style.width = `${w}px`;
    selectedImage.style.height = `${h}px`;
    selectedImage.style.objectFit = "cover";

    setTimeout(() => handleContentChange(), 10);
  };

  const resetImageSize = () => {
    if (!selectedImage) return;
    selectedImage.removeAttribute("width");
    selectedImage.removeAttribute("height");
    selectedImage.style.width = "";
    selectedImage.style.height = "";
    selectedImage.style.objectFit = "";
    setImgW("");
    setImgH("");
    setTimeout(() => handleContentChange(), 10);
  };

  const insertBlogImageBlock = (base64) => {
    const blockId = `blogimg_${Date.now()}`;
    const html = `
      <div id="${blockId}" style="width:100%;">
        <img src="${base64}" alt="" style="float:left; max-width:45%; height:auto; margin:0 16px 12px 0; display:block; border-radius:6px;" />
        <div style="min-height: 1px;"><p><br/></p></div>
        <div style="clear: both;"></div>
      </div>
    `;
    ensureSelectionInsideEditor();
    document.execCommand("insertHTML", false, html);
    setTimeout(() => {
      const root = editorRef.current;
      if (!root) return;
      const block = root.querySelector(`#${blockId}`);
      const img = block?.querySelector("img");
      if (img) {
        clearSelectedImage();
        setSelectedImage(img);
        img.style.outline = "3px solid #3b82f6";
        setImgW(img.getAttribute("width") ?? "");
        setImgH(img.getAttribute("height") ?? "");
      }
      handleContentChange();
    }, 10);
  };

  const onImageIconClick = () => {
    clearSelectedImage();
    setShowCropper(true);
  };

  const openLinkModal = () => {
    if (!selectedImage) {
        const restored = restoreSelection();
        if (!restored) {
            alert("Please select text or click an image first to add a link");
            return;
        }
    }
    setEditingLinkNode(null);
    setLinkUrl("");
    setLinkNewTab(false);
    setLinkSponsored(false);
    setLinkNoFollow(false);
    setLinkError("");
    setShowLinkModal(true);
  };

  const validateUrl = (url) => {
    const pattern = /^(https?:\/\/)/i;
    if (!pattern.test(url)) return false;
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleLinkSave = () => {
    if (!linkUrl.trim()) {
      setLinkError("URL cannot be empty");
      return;
    }
    if (!validateUrl(linkUrl)) {
      setLinkError("URL must start with http:// or https://");
      return;
    }

    const relValues = [];
    if (linkNoFollow) relValues.push("nofollow");
    if (linkSponsored) relValues.push("sponsored");
    const relString = relValues.join(" ");

    if (editingLinkNode) {
      editingLinkNode.href = linkUrl;
      editingLinkNode.target = linkNewTab ? "_blank" : "_self";
      editingLinkNode.rel = relString;
      setEditingLinkNode(null);
    } else if (selectedImage) {
      const parent = selectedImage.parentElement;
      if (parent && parent.tagName === "A") {
        parent.href = linkUrl;
        parent.target = linkNewTab ? "_blank" : "_self";
        parent.rel = relString;
      } else {
        const newAnchor = document.createElement("a");
        newAnchor.href = linkUrl;
        newAnchor.target = linkNewTab ? "_blank" : "_self";
        newAnchor.rel = relString;
        selectedImage.parentNode?.insertBefore(newAnchor, selectedImage);
        newAnchor.appendChild(selectedImage);
        selectedImage.style.outline = "none";
      }
      setSelectedImage(null);
      setImgW("");
      setImgH("");
    } else {
      restoreSelection();
      editorRef.current?.focus();
      document.execCommand("createLink", false, linkUrl);
      if (editorRef.current) {
        const links = editorRef.current.querySelectorAll(`a[href="${linkUrl}"]`);
        const newLink = links[links.length - 1];
        if (newLink) {
          if (linkNewTab) newLink.target = "_blank";
          if (relString) newLink.rel = relString;
        }
      }
    }
    setShowLinkModal(false);
    setLinkUrl("");
    setLinkError("");
    setTimeout(() => handleContentChange(), 10);
  };

  const toggleHtmlMode = () => {
    if (showHtmlMode) {
      setContent(htmlContent);
      setTimeout(() => {
        if (editorRef.current) editorRef.current.innerHTML = htmlContent;
      }, 0);
    } else {
      setHtmlContent(editorRef.current?.innerHTML || "");
    }
    setShowHtmlMode(!showHtmlMode);
  };

  return (
    <div
      data-blog-editor-root="true"
      onKeyDownCapture={stopImplicitSubmitCapture}
      className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col"
    >
      {/* Toolbar */}
      <div className="border-b border-gray-200 dark:border-gray-700 p-3 flex flex-wrap gap-2 sticky top-0 bg-white dark:bg-gray-800 z-10 rounded-t-lg items-center">
        {/* Headings */}
        <select
          onChange={(e) => handleHeading(e.target.value)}
          value={selectedHeading}
          className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        >
          {/* Default value matches 'p' key */}
          <option value="p">Paragraph</option>
          <option value="1">Heading 1</option>
          <option value="2">Heading 2</option>
          <option value="3">Heading 3</option>
          <option value="4">Heading 4</option>
          <option value="5">Heading 5</option>
          <option value="6">Heading 6</option>
        </select>

        {/* Font Family */}
        <select
          onChange={(e) => handleFont(e.target.value)}
          value={selectedFont}
          className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        >
          <option value="Arial">Arial</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          <option value="Verdana">Verdana</option>
          <option value="Outfit">Outfit</option>
          <option value="Inter">Inter</option>
        </select>

        {/* Image resize */}
        {selectedImage && (
          <div className="flex items-center gap-2 px-2 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700">
            <span className="text-xs text-gray-600 dark:text-gray-300">Image px</span>
            <input type="number" min={1} value={imgW} onChange={(e) => setImgW(e.target.value)} className="w-20 px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" placeholder="W" />
            <span className="text-xs text-gray-500">×</span>
            <input type="number" min={1} value={imgH} onChange={(e) => setImgH(e.target.value)} className="w-20 px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" placeholder="H" />
            <button type="button" onClick={applyImageSize} className="px-2 py-1 text-sm rounded bg-blue-600 text-white hover:bg-blue-700">Apply</button>
            <button type="button" onClick={resetImageSize} className="px-2 py-1 text-sm rounded bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-500">Reset</button>
          </div>
        )}

        <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1" />

        {[
          { id: "bold", icon: <Bold size={18} />, active: activeFormats.bold },
          { id: "italic", icon: <Italic size={18} />, active: activeFormats.italic },
          { id: "underline", icon: <Underline size={18} />, active: activeFormats.underline },
          { id: "strikeThrough", icon: <Strikethrough size={18} />, active: activeFormats.strikethrough },
        ].map((btn) => (
          <button key={btn.id} type="button" onClick={() => handleFormat(btn.id)} className={`p-2 rounded transition ${btn.active ? "bg-blue-500 text-white" : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"}`}>
            {btn.icon}
          </button>
        ))}

        <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1" />

        {[
          { id: "justifyLeft", icon: <AlignLeft size={18} /> },
          { id: "justifyCenter", icon: <AlignCenter size={18} /> },
          { id: "justifyRight", icon: <AlignRight size={18} /> },
        ].map((btn) => (
          <button key={btn.id} type="button" onClick={() => { if (selectedImage) { if (btn.id === "justifyLeft") applyImageFloat("left"); if (btn.id === "justifyRight") applyImageFloat("right"); if (btn.id === "justifyCenter") applyImageFloat("center"); setTimeout(() => handleContentChange(), 10); return; } handleFormat(btn.id); }} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition text-gray-700 dark:text-gray-300">
            {btn.icon}
          </button>
        ))}

        <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1" />

        <button type="button" onClick={() => handleList("ul")} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition text-gray-700 dark:text-gray-300"><List size={18} /></button>
        <button type="button" onClick={() => handleList("ol")} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition text-gray-700 dark:text-gray-300"><ListOrdered size={18} /></button>
        <button type="button" onClick={openLinkModal} className={`p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition text-gray-700 dark:text-gray-300 ${selectedImage ? "bg-blue-100 text-blue-600" : ""}`}><Link2 size={18} /></button>
        <button type="button" onClick={onImageIconClick} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition text-gray-700 dark:text-gray-300"><ImageIcon size={18} /></button>
        <button type="button" onClick={toggleHtmlMode} className={`p-2 rounded transition ml-auto ${showHtmlMode ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300" : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"}`} title="Toggle HTML Source"><Code size={18} /></button>
      </div>

      {/* Editor Area */}
      {showHtmlMode ? (
        <textarea
          value={htmlContent}
          onChange={(e) => setHtmlContent(e.target.value)}
          className="w-full h-96 p-4 font-mono text-sm border-0 focus:outline-none resize-none bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
          placeholder="Edit HTML..."
          spellCheck="false"
        />
      ) : (
        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          onInput={handleContentChange}
          onPaste={handlePaste}
          onClick={handleEditorClick}
          onKeyUp={handleContentChange} // KeyUp checks active block
          style={{ direction: "ltr", textAlign: "left" }}
          className={`
            w-full min-h-[24rem] p-6 focus:outline-none block
            leading-relaxed text-gray-800 dark:text-gray-200
            whitespace-normal

            /* === FORCE WHITE TEXT IN DARK MODE === */
            dark:[&_*]:!text-white

            /* === TYPOGRAPHY SCALE: ALL Headings > Paragraph === */
            
            /* Paragraph (Base) */
            [&_p]:text-base [&_p]:mb-3 [&_p]:leading-7

            /* Headings - All are Font-Bold and Larger than Base */
            [&_h6]:text-lg [&_h6]:font-bold [&_h6]:my-2
            [&_h5]:text-xl [&_h5]:font-bold [&_h5]:my-3
            [&_h4]:text-2xl [&_h4]:font-bold [&_h4]:my-3
            [&_h3]:text-3xl [&_h3]:font-bold [&_h3]:my-4
            [&_h2]:text-4xl [&_h2]:font-bold [&_h2]:my-5
            [&_h1]:text-5xl [&_h1]:font-bold [&_h1]:my-6
            
            /* Lists */
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-3
            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-3
            [&_li]:mb-1

            /* Links & Images */
            [&_a]:text-blue-600 dark:[&_a]:!text-blue-400 [&_a]:underline [&_a]:cursor-pointer
            [&_img]:max-w-full [&_img]:rounded-md [&_img]:shadow-sm [&_img]:cursor-pointer [&_img:hover]:opacity-90
          `}
        />
      )}

      {/* Cropper Modal */}
      {showCropper && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm" onClick={(e) => { if (e.target === e.currentTarget) setShowCropper(false); }}>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 w-[min(900px,95vw)] shadow-2xl border border-gray-200 dark:border-gray-700">
            <ImageHandler
              outputSize={null}
              defaultRatio="Free"
              onChange={async (croppedFile) => {
                if (croppedFile.size > MAX_IMAGE_BYTES) {
                  alert("Image size must be less than 2MB");
                  return;
                }
                const base64 = await fileToBase64(croppedFile);
                setShowCropper(false);
                insertBlogImageBlock(base64);
              }}
              onCancel={() => setShowCropper(false)}
            />
            <div className="mt-3 flex justify-end">
              <button type="button" onClick={() => setShowCropper(false)} className="px-3 py-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Link Modal */}
      {showLinkModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm" onClick={(e) => { if (e.target === e.currentTarget) setShowLinkModal(false); }}>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-96 shadow-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{editingLinkNode ? "Edit Link" : selectedImage ? "Add Link to Image" : "Insert Link"}</h3>
              <button type="button" onClick={() => setShowLinkModal(false)} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"><X size={20} /></button>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">URL</label>
              <input type="url" value={linkUrl} onChange={(e) => { setLinkUrl(e.target.value); if (linkError) setLinkError(""); }} placeholder="https://example.com" className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${linkError ? "border-red-500 ring-red-200 focus:ring-red-500" : "border-gray-300 dark:border-gray-600 focus:ring-blue-500"}`} autoFocus />
              {linkError && (<p className="text-red-500 text-xs mt-1">{linkError}</p>)}
            </div>
            <div className="space-y-3 mb-6">
              {[{ label: "Open in new tab", state: linkNewTab, setState: setLinkNewTab }, { label: "Mark as sponsored", state: linkSponsored, setState: setLinkSponsored }, { label: "Mark as nofollow", state: linkNoFollow, setState: setLinkNoFollow }].map((opt, idx) => (
                <label key={idx} className="flex items-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded -ml-2">
                  <input type="checkbox" checked={opt.state} onChange={(e) => opt.setState(e.target.checked)} className="mr-3 w-4 h-4" />
                  <span className="text-sm text-gray-700 dark:text-gray-300 select-none">{opt.label}</span>
                </label>
              ))}
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={handleLinkSave} className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition font-medium shadow-sm">{editingLinkNode || selectedImage ? "Update" : "Insert"}</button>
              <button type="button" onClick={() => setShowLinkModal(false)} className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition font-medium">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogEditor;