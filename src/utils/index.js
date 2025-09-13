export const initialDashboardConfig = {
  categories: [
    {
      id: "cspm-executive",
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: "cspm-executive",
          widget_id: "6f0f03e1-d346-4b4e-bcf2-729f4514c2ef",
          name: "Cloud Accounts",
          type: "donut-widget",
          segments: [
            { percentage: 50, color: "#4285f4" },
            { percentage: 50, color: "#e8eaed" },
          ],
          items: [
            { color: "#4285f4", label: "Connected (2)" },
            { color: "#e8eaed", label: "Not Connected (2)" },
          ],
        },
        {
          id: "cspm-executive",
          widget_id: "8433fd52-609c-45e5-b092-d509c6e6a664",
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
          id: "cwpp-dashboard",
          widget_id: "f266f777-2f5e-4ef8-80c7-a580ce035d58",
          name: "Top 5 Namespace Specific Alerts",
          text: "No Graph data available!",
          type: "empty-graph",
        },
        {
          id: "cwpp-dashboard",
          widget_id: "2c3cac98-840c-4c39-bb08-aeeed5ec2594",
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
          id: "registry-scan",
          widget_id: "2bd3caac-25a3-47e3-8566-389d1571d7af",
          name: "Image Risk Assessment",
          type: "risk-bar",
          total: 1470,
          label: "Total Vulnerabilities",
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
          id: "registry-scan",
          widget_id: "6c1469e4-b653-4eec-9d51-099d9d15de21",
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
