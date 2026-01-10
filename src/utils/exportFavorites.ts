import { Tool } from "../data/mockData";

export function exportFavoritesToCSV(tools: Tool[]) {
  if (tools.length === 0) {
    return;
  }

  // Create CSV header
  const headers = ["Title", "Description", "Category", "Setup Time", "ROI", "Cost", "Tags", "Type"];

  // Create CSV rows
  const rows = tools.map(tool => [
    tool.title,
    tool.description.replace(/,/g, ";"), // Replace commas to avoid CSV issues
    tool.category || "",
    tool.setupTime || "",
    tool.roi || "",
    tool.cost || "",
    tool.tags?.join("; ") || "",
    tool.isPro ? "PRO" : "Free"
  ]);

  // Combine headers and rows
  const csvContent = [
    headers.join(","),
    ...rows.map(row => row.map(cell => `"${cell}"`).join(","))
  ].join("\n");

  // Create blob and download
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  link.setAttribute("href", url);
  link.setAttribute("download", `mainst-ai-favorites-${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = "hidden";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function exportFavoritesToPDF(tools: Tool[]) {
  if (tools.length === 0) {
    return;
  }

  // Create HTML content for PDF
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Main St. AI - My Favorite Tools</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          margin: 40px;
          color: #1f2937;
        }
        .header {
          text-align: center;
          margin-bottom: 40px;
          border-bottom: 3px solid #10b981;
          padding-bottom: 20px;
        }
        h1 {
          color: #111827;
          margin: 0 0 10px 0;
        }
        .subtitle {
          color: #6b7280;
          font-size: 14px;
        }
        .tool-card {
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 20px;
          page-break-inside: avoid;
        }
        .tool-header {
          display: flex;
          align-items: center;
          margin-bottom: 12px;
        }
        .tool-icon {
          font-size: 32px;
          margin-right: 12px;
        }
        .tool-title {
          font-size: 18px;
          font-weight: 600;
          color: #111827;
          margin: 0;
        }
        .pro-badge {
          background: linear-gradient(135deg, #f97316 0%, #ec4899 100%);
          color: white;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 10px;
          font-weight: bold;
          margin-left: 8px;
        }
        .tool-description {
          color: #4b5563;
          line-height: 1.6;
          margin-bottom: 12px;
        }
        .tool-stats {
          display: flex;
          gap: 20px;
          font-size: 13px;
          color: #6b7280;
          margin-bottom: 12px;
        }
        .stat {
          display: flex;
          align-items: center;
        }
        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 12px;
        }
        .tag {
          background-color: #f3f4f6;
          color: #4b5563;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 12px;
        }
        .footer {
          text-align: center;
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
          color: #9ca3af;
          font-size: 12px;
        }
        @media print {
          body { margin: 20px; }
          .tool-card { page-break-inside: avoid; }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🏢 Main St. AI</h1>
        <p class="subtitle">My Favorite AI Tools • Generated on ${new Date().toLocaleDateString()}</p>
      </div>

      ${tools.map(tool => `
        <div class="tool-card">
          <div class="tool-header">
            <span class="tool-icon">${tool.icon}</span>
            <h2 class="tool-title">
              ${tool.title}
              ${tool.isPro ? '<span class="pro-badge">PRO</span>' : ''}
            </h2>
          </div>

          <p class="tool-description">${tool.description}</p>

          ${tool.setupTime || tool.roi || tool.cost ? `
            <div class="tool-stats">
              ${tool.setupTime ? `<div class="stat">⏱️ ${tool.setupTime}</div>` : ''}
              ${tool.roi ? `<div class="stat">📈 ${tool.roi}</div>` : ''}
              ${tool.cost ? `<div class="stat">💰 ${tool.cost}</div>` : ''}
            </div>
          ` : ''}

          ${tool.tags && tool.tags.length > 0 ? `
            <div class="tags">
              ${tool.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
          ` : ''}
        </div>
      `).join('')}

      <div class="footer">
        <p>Exported from Main St. AI • Visit mainst.ai for more tools</p>
      </div>
    </body>
    </html>
  `;

  // Open in new window for printing
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(htmlContent);
    printWindow.document.close();

    // Wait for content to load before printing
    printWindow.onload = () => {
      printWindow.focus();
      printWindow.print();
    };
  }
}

export function exportFavoritesAsJSON(tools: Tool[]) {
  if (tools.length === 0) {
    return;
  }

  const jsonContent = JSON.stringify(tools, null, 2);
  const blob = new Blob([jsonContent], { type: "application/json" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  link.setAttribute("href", url);
  link.setAttribute("download", `mainst-ai-favorites-${new Date().toISOString().split('T')[0]}.json`);
  link.style.visibility = "hidden";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
