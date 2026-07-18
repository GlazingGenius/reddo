import { useState } from "react";
import { X } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";


interface EnquiryModalProps {
  open: boolean;
  onClose: () => void;
  product: string;
  capacity: string;
}

export default function EnquiryModal({
  open,
  onClose,
  product,
  capacity,
}: EnquiryModalProps) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
const [phone, setPhone] = useState("");

  if (!open) return null;

  const handleSubmit = () => {
    if (!name.trim() || !phone) {
  alert("Please fill Name and Mobile Number.");
  return;
}

    const message = `*New Product Enquiry*

*Product:* ${product}
*Capacity:* ${capacity}

*Name:* ${name}
*Mobile:* ${phone}
*Email:* ${email}
*Location:* ${location}

I'm interested in getting a quotation for this machine.`;

    window.open(
      `https://wa.me/917338462806?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.55)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: 500,
          maxWidth: "95%",
          background: "#fff",
          borderRadius: 12,
          padding: 30,
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            right: 15,
            top: 15,
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <X />
        </button>

        <h2
          style={{
            color: "#178B4C",
            marginBottom: 20,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Request a Quote
        </h2>

        <div style={{ marginBottom: 15 }}>
          <strong>Product:</strong> {product}
        </div>

        <div style={{ marginBottom: 20 }}>
          <strong>Capacity:</strong> {capacity}
        </div>

        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

<input
  placeholder="Company Name"
  value={company}
  onChange={(e) => setCompany(e.target.value)}
  style={inputStyle}
/>

     <PhoneInput
  international
  defaultCountry="IN"
  value={phone}
  onChange={(value) => setPhone(value || "")}
  className="phone-input"
/>

        <input
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={inputStyle}
        />

        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: 14,
            borderRadius: 8,
            border: "none",
            background: "#178B4C",
            color: "#fff",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Send Enquiry
        </button>
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  fontSize: "14px",
};