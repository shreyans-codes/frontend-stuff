import { Button } from "@/components/ui/button";

const Confetti = () => {
  const displayConfetti = () => {
    console.log(window);
    window.confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };
  return (
    <div>
      <h1 className="text-4xl font-extrabold lg:text-5xl">Congratulations!</h1>
      <Button onClick={displayConfetti}>Click Me!</Button>
    </div>
  );
};

export default Confetti;
