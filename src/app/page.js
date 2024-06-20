import HeroSection from "./compoents/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      <h1>Blogs</h1>

      <div
        className="container"
        style={{
          backgroundColor: "#974c01",
          borderRadius: "25px",
          boxShadow:
            "0 1px 2px rgba(32, 33, 36, 0.15), 0 1px 8px rgba(32, 33, 36, 0.08)",
          position: "relative",
          height: "50vh",
          left: "0px",
        }}
      >
        <div
          className="cotainer"
          style={{
            backgroundColor: "#FFF",
            width: "100%",
            marginTop: "10px",
            borderRadius: "25px",
            position: "absolute",
            height: "100%",
            top: "0px",
          }}
        >
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
        </div>
      </div>
    </>
  );
}
