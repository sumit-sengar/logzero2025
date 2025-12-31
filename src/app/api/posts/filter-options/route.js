export async function GET() {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${backendUrl}/posts/filter-options`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Backend returned ${response.status}`);
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error("Error fetching filter options:", error);
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
