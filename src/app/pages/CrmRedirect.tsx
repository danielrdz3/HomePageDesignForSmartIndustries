import { useEffect } from "react";

export function CrmRedirect() {
  useEffect(() => {
    window.location.href = "/crm/";
  }, []);

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      fontFamily: "'Inter', sans-serif",
      color: "#2c2c64",
    }}>
      Redirigiendo al CRM...
    </div>
  );
}
