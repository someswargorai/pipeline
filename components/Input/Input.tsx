"use client"

export interface input {
  placeholder: string;
  type: string;
  label: string;
  icon: JSX.Element;
  align: "left" | "right";
  error:string | undefined
}

export const Input = ({ placeholder, type, label, icon, align = "left",error,...rest }: input) => {
  const isLeft = align === "left";

  return (
    <div style={{ position: "relative", width: "280px", marginBottom: "20px", fontFamily: "Arial, sans-serif" }}>
      <label style={{ marginBottom: "6px", fontWeight: 300 }}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...rest}
        style={{
          width: "100%",
          padding: isLeft ? "10px 12px 10px 40px" : "10px 40px 10px 12px",
          borderRadius: "8px",
          outline: "none",
          fontSize: "14px",
          transition: "border-color 0.3s, box-shadow 0.3s",
          border: error ? "1px solid red" : "1px solid #ccc",
        }}
      />
      <span
        style={{
          position: "absolute",
          top: "30px",
          [isLeft ? "left" : "right"]: "12px",
          color: "#6b6b6b",
          pointerEvents: "none",
        }}
      >
        {icon}
      </span>
      <span style={{color:"red",fontSize:"0.7rem",}}>{error}</span>
    </div>
  );
};
