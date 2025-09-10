export const initialDashboardConfig = {
  categories: [
    {
      id: "cspm-executive",
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: "cloud-accounts",
          name: "Cloud Accounts",
          type: "donut-widget",
          segments: [{ percentage: 50, color: "#4285f4" }],
          items: [
            { color: "#4285f4", label: "Connected (2)" },
            { color: "#e8eaed", label: "Not Connected (2)" },
          ],
        },
        {
          id: "risk-assessment",
          name: "Cloud Account Risk Assessment",
          type: "donut-widget",
          segments: [
            { percentage: 17, color: "#ea4335" },
            { percentage: 7, color: "#fbbc04" },
            { percentage: 1, color: "#9aa0a6" },
            { percentage: 75, color: "#34a853" },
          ],
          items: [
            { color: "#ea4335", label: "Failed (1689)" },
            { color: "#fbbc04", label: "Warning (681)" },
            { color: "#9aa0a6", label: "Not available (36)" },
            { color: "#34a853", label: "Passed (7253)" },
          ],
        },
      ],
    },
    {
      id: "cwpp-dashboard",
      name: "CWPP Dashboard",
      widgets: [
        {
          id: "namespace-alerts",
          name: "Top 5 Namespace Specific Alerts",
          text: "No Graph data available!",
          type: "empty-graph",
        },
        {
          id: "workload-alerts",
          name: "Workload Alerts",
          text: "No Graph data available!",
          type: "empty-graph",
        },
      ],
    },
    {
      id: "registry-scan",
      name: "Registry Scan",
      widgets: [
        {
          id: "image-risk",
          name: "Image Risk Assessment",
          type: "risk-bar",
          total: 2,
          label: "Total Images are 2",
          bars: [
            { width: "50%", color: "#d93025" },
            { width: "50%", color: "#f9ab00" },
          ],
          legend: [
            { color: "#d93025", label: "Critical (2)" },
            { color: "#f9ab00", label: "High (2)" },
          ],
        },
        {
          id: "security-issues",
          name: "Image Security Issues",
          type: "risk-bar",
          total: 2,
          label: "Total Images",
          bars: [
            { width: "50%", color: "#d93025" },
            { width: "50%", color: "#f9ab00" },
          ],
          legend: [
            { color: "#d93025", label: "Critical (2)" },
            { color: "#f9ab00", label: "High (2)" },
          ],
        },
      ],
    },
  ],
};


