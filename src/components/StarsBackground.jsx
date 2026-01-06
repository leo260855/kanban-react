function StarsBackground() {
  const stars = Array.from({ length: 120 });

  return (
    <div className="stars">
      {stars.map((_, i) => {
        const size = Math.random() * 2 + 1;
        const duration = Math.random() * 20 + 10; // 🔥 velocidad visible

        return (
          <span
            key={i}
            className="star twinkle"
            style={{
              position: "absolute",
              width: size,
              height: size,
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              background: "white",
              opacity: Math.random(),
              animation: `moveStar ${duration}s linear infinite, twinkle 3s infinite alternate`,
            }}
          />
        );
      })}
    </div>
  );
}