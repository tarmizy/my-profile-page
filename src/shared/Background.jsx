export default function Background() {
  return (
    <>
      <video className="video-bg" autoPlay muted loop playsInline poster="/logo.png">
        <source src="/video-background.mp4" type="video/mp4" />
      </video>
      <div className="bg-overlay" />
      <div className="bg-vignette" />
    </>
  );
}
