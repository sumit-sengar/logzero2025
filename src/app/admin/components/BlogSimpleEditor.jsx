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
  const [selectedHeading, setSelectedHeading] = useState("");
  const [selectedFont, setSelectedFont] = useState("");
  const [activeFormats, setActiveFormats] = useState({
    bold: false,
    italic: false,
    underline: false,
    strikethrough: false,
  });

  const [savedSelection, setSavedSelection] = useState(null);

  // --- Refs ---
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

  const ensureSelectionInsideEditor = () => {
    const root = editorRef.current;
    if (!root) return false;

    root.focus();
    const sel = window.getSelection();
    if (!sel) return false;

    if (sel.rangeCount === 0) {
      const r = document.createRange();
      r.selectNodeContents(root);
      r.collapse(false);
      sel.removeAllRanges();
      sel.addRange(r);
    }

    let range = sel.getRangeAt(0);
    const containerEl =
      range.startContainer.nodeType === Node.ELEMENT_NODE
        ? range.startContainer
        : range.startContainer.parentElement;

    if (!containerEl || !root.contains(containerEl)) {
      const r = document.createRange();
      r.selectNodeContents(root);
      r.collapse(false);
      sel.removeAllRanges();
      sel.addRange(r);
      range = r;
    }

    const current =
      (range.startContainer.nodeType === Node.ELEMENT_NODE
        ? range.startContainer
        : range.startContainer.parentElement) || null;

    const block = current?.closest?.("p,h1,h2,h3,h4,h5,h6,li,blockquote");
    if (!block) {
      document.execCommand("insertHTML", false, "<p><br/></p>");
    }
    return true;
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

    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
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
        <img
          src="${base64}"
          alt=""
          style="float:left; max-width:45%; height:auto; margin:0 16px 12px 0; display:block; border-radius:6px;"
        />
        <div style="min-height: 1px;">
          <p><br/></p>
        </div>
        <div style="clear: both;"></div>
      </div>
    `;

    editorRef.current?.focus();
    document.execCommand("insertHTML", false, html);

    setTimeout(() => {
      const root = editorRef.current;
      if (!root) return;

      const block = root.querySelector(`#${blockId}`);
      const p = block?.querySelector("div > p");
      const img = block?.querySelector("img");

      if (img) {
        clearSelectedImage();
        setSelectedImage(img);
        img.style.outline = "3px solid #3b82f6";
        setImgW(img.getAttribute("width") ?? "");
        setImgH(img.getAttribute("height") ?? "");
      }

      if (p) {
        const range = document.createRange();
        range.selectNodeContents(p);
        range.collapse(true);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
      }

      handleContentChange();
    }, 10);
  };

  // --- Effects ---
  useEffect(() => {
    if (editorRef.current && !showHtmlMode) {
      if (editorRef.current.innerHTML !== content) {
        editorRef.current.innerHTML = content;
      }
    }
  }, [showHtmlMode]);

  useEffect(() => {
    const handleSelectionChange = () => updateFormatStates();
    document.addEventListener("selectionchange", handleSelectionChange);
    return () =>
      document.removeEventListener("selectionchange", handleSelectionChange);
  }, []);

  // --- Handlers ---
  const updateFormatStates = () => {
    setActiveFormats({
      bold: document.queryCommandState("bold"),
      italic: document.queryCommandState("italic"),
      underline: document.queryCommandState("underline"),
      strikethrough: document.queryCommandState("strikeThrough"),
    });
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
      setEditingLinkNode(linkNode);
      setLinkUrl(linkNode.href);
      setLinkNewTab(linkNode.target === "_blank");
      setLinkNoFollow(linkNode.rel.includes("nofollow"));
      setLinkSponsored(linkNode.rel.includes("sponsored"));
      setLinkError("");

      saveSelection();
      setShowLinkModal(true);
      return;
    }

    if (target.tagName === "IMG") {
      setSelectedImage(target);
      target.style.outline = "3px solid #3b82f6";

      setImgW(target.getAttribute("width") ?? "");
      setImgH(target.getAttribute("height") ?? "");
    }
  };

  const handleHeading = (level) => {
    setSelectedHeading(level);
    const ok = ensureSelectionInsideEditor();
    if (!ok) return;

    const tag = level === "p" ? "P" : `H${level}`;
    document.execCommand("formatBlock", false, tag);
    setTimeout(() => handleContentChange(), 10);
  };

  const handleFont = (font) => {
    setSelectedFont(font);
    editorRef.current?.focus();
    document.execCommand("fontName", false, font);
    setTimeout(() => handleContentChange(), 10);
  };

  const handleFormat = (command) => {
    editorRef.current?.focus();
    document.execCommand(command, false);
    setTimeout(() => handleContentChange(), 10);
  };

  const handleList = (type) => {
    editorRef.current?.focus();
    const cmd = type === "ul" ? "insertUnorderedList" : "insertOrderedList";
    document.execCommand(cmd, false);
    setTimeout(() => handleContentChange(), 10);
  };

  const onImageIconClick = () => {
    clearSelectedImage();
    setShowCropper(true);
  };

  const saveSelection = () => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      setSavedSelection(selection.getRangeAt(0));
    }
  };

  const restoreSelection = () => {
    if (savedSelection) {
      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(savedSelection);
      }
    }
  };

  const openLinkModal = () => {
    if (!selectedImage) {
      const selection = window.getSelection();
      const hasSelection =
        selection && selection.rangeCount > 0 && !selection.isCollapsed;

      if (!hasSelection) {
        alert("Please select text or click an image first to add a link");
        return;
      }
      saveSelection();
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
    }
    else if (selectedImage) {
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
    }
    else {
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
    setSavedSelection(null);
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
        <select
          onChange={(e) => handleHeading(e.target.value)}
          value={selectedHeading}
          className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        >
          <option value="">Heading</option>
          <option value="p">Paragraph</option>
          <option value="1">H1</option>
          <option value="2">H2</option>
          <option value="3">H3</option>
          <option value="4">H4</option>
          <option value="5">H5</option>
          <option value="6">H6</option>
        </select>

        <select
          onChange={(e) => handleFont(e.target.value)}
          value={selectedFont}
          className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        >
          <option value="">Font</option>
          <option value="Outfit">Outfit</option>
          <option value="Inter">Inter</option>
          <option value="Arial">Arial</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          <option value="Verdana">Verdana</option>
        </select>

        {selectedImage && (
          <div className="flex items-center gap-2 px-2 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700">
            <span className="text-xs text-gray-600 dark:text-gray-300">Image px</span>
            <input
              type="number"
              min={1}
              value={imgW}
              onChange={(e) => setImgW(e.target.value)}
              className="w-20 px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              placeholder="W"
            />
            <span className="text-xs text-gray-500">×</span>
            <input
              type="number"
              min={1}
              value={imgH}
              onChange={(e) => setImgH(e.target.value)}
              className="w-20 px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              placeholder="H"
            />
            <button
              type="button"
              onClick={applyImageSize}
              className="px-2 py-1 text-sm rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Apply
            </button>
            <button
              type="button"
              onClick={resetImageSize}
              className="px-2 py-1 text-sm rounded bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-500"
            >
              Reset
            </button>
          </div>
        )}

        <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1" />

        {[
          { id: "bold", icon: <Bold size={18} />, active: activeFormats.bold },
          { id: "italic", icon: <Italic size={18} />, active: activeFormats.italic },
          { id: "underline", icon: <Underline size={18} />, active: activeFormats.underline },
          { id: "strikeThrough", icon: <Strikethrough size={18} />, active: activeFormats.strikethrough },
        ].map((btn) => (
          <button
            key={btn.id}
            type="button"
            onClick={() => handleFormat(btn.id)}
            className={`p-2 rounded transition ${
              btn.active
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            {btn.icon}
          </button>
        ))}

        <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1" />

        {[
          { id: "justifyLeft", icon: <AlignLeft size={18} /> },
          { id: "justifyCenter", icon: <AlignCenter size={18} /> },
          { id: "justifyRight", icon: <AlignRight size={18} /> },
        ].map((btn) => (
          <button
            key={btn.id}
            type="button"
            onClick={() => {
              if (selectedImage) {
                if (btn.id === "justifyLeft") applyImageFloat("left");
                if (btn.id === "justifyRight") applyImageFloat("right");
                if (btn.id === "justifyCenter") applyImageFloat("center");
                setTimeout(() => handleContentChange(), 10);
                return;
              }
              handleFormat(btn.id);
            }}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition text-gray-700 dark:text-gray-300"
          >
            {btn.icon}
          </button>
        ))}

        <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1" />

        <button type="button" onClick={() => handleList("ul")} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-gray-700 dark:text-gray-300"><List size={18} /></button>
        <button type="button" onClick={() => handleList("ol")} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-gray-700 dark:text-gray-300"><ListOrdered size={18} /></button>

        <button
          type="button"
          onClick={openLinkModal}
          className={`p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition text-gray-700 dark:text-gray-300 ${selectedImage ? "bg-blue-100 text-blue-600" : ""}`}
        >
          <Link2 size={18} />
        </button>

        <button type="button" onClick={onImageIconClick} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-gray-700 dark:text-gray-300"><ImageIcon size={18} /></button>

        <button
          type="button"
          onClick={toggleHtmlMode}
          className={`p-2 rounded transition ml-auto ${showHtmlMode ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300" : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
        >
          <Code size={18} />
        </button>
      </div>

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
          onClick={handleEditorClick}
          onKeyUp={updateFormatStates}
          style={{ direction: "ltr", textAlign: "left" }}
          className={`
            w-full min-h-[24rem] p-6 focus:outline-none block
            leading-relaxed text-gray-800 dark:text-gray-200
            whitespace-normal
            [&_p]:text-base [&_p]:mb-3
            [&_h1]:text-5xl [&_h1]:font-bold [&_h1]:my-6
            [&_h2]:text-4xl [&_h2]:font-bold [&_h2]:my-5
            [&_h3]:text-3xl [&_h3]:font-semibold [&_h3]:my-4
            [&_h4]:text-2xl [&_h4]:font-semibold [&_h4]:my-3
            [&_h5]:text-xl [&_h5]:font-semibold [&_h5]:my-2
            [&_h6]:text-lg [&_h6]:font-semibold [&_h6]:my-2
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-3
            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-3
            [&_li]:mb-1
            [&_a]:text-blue-600 dark:[&_a]:text-blue-400 [&_a]:underline [&_a]:cursor-pointer
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
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {editingLinkNode ? "Edit Link" : selectedImage ? "Add Link to Image" : "Insert Link"}
              </h3>
              <button type="button" onClick={() => setShowLinkModal(false)} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"><X size={20} /></button>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">URL</label>
              <input
                type="url"
                value={linkUrl}
                onChange={(e) => { setLinkUrl(e.target.value); if (linkError) setLinkError(""); }}
                placeholder="https://example.com"
                className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${linkError ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"}`}
                autoFocus
              />
              {linkError && <p className="text-red-500 text-xs mt-1">{linkError}</p>}
            </div>

            <div className="space-y-3 mb-6">
              {[
                { label: "Open in new tab", state: linkNewTab, setState: setLinkNewTab },
                { label: "Mark as sponsored", state: linkSponsored, setState: setLinkSponsored },
                { label: "Mark as nofollow", state: linkNoFollow, setState: setLinkNoFollow },
              ].map((opt, idx) => (
                <label key={idx} className="flex items-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded -ml-2">
                  <input type="checkbox" checked={opt.state} onChange={(e) => opt.setState(e.target.checked)} className="mr-3 w-4 h-4" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{opt.label}</span>
                </label>
              ))}
            </div>

            <div className="flex gap-3">
              <button type="button" onClick={handleLinkSave} className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-medium">
                {editingLinkNode || selectedImage ? "Update" : "Insert"}
              </button>
              <button type="button" onClick={() => setShowLinkModal(false)} className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogEditor;