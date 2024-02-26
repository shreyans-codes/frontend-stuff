import CustomCard from "@/components/custom/CustomCard";

const BentoGrid = () => {
  const titles = [
    "Hello Shreyans",
    "Weather Update",
    "Upcoming tasks",
    "Sleep Update",
    "Messages",
    "Notifications",
    "Contacts",
    "Help",
  ];
  const descriptions = [
    "Time is 6:34AM",
    "30°C (Humid)",
    "Here is what you have to do today:",
    "3H (REM) 8H (Total)",
    "Unread",
    "",
    "Emergency",
    "Call us at +91 8888888888",
  ];

  const body_texts = [
    "-Close 2 tickets<br>-Meet Mom for lunch<br>-Order Nike shoes",
    "RSR Company: So, what's the plan?",
    "Rent due next week<br>Market up by 3%",
    "Papa<br>Mummy<br>Cheeku",
  ];
  return (
    <div className=" px-20">
      <h1 className="text-3xl text-left p-3">Using Grid</h1>
      <div className="grid grid-cols-4 gap-4">
        <CustomCard
          propsClassName={"col-span-2"}
          title={titles[0]}
          description={descriptions[0]}
        />
        <CustomCard title={titles[1]} description={descriptions[1]} />
        <CustomCard
          propsClassName={"row-span-3"}
          title={titles[2]}
          description={descriptions[2]}
          body_text={body_texts[0]}
        />
        <CustomCard title={titles[3]} description={descriptions[3]} />
        <CustomCard
          propsClassName={"col-span-2"}
          title={titles[4]}
          description={descriptions[4]}
          body_text={body_texts[1]}
        />
        <CustomCard
          title={titles[5]}
          description={descriptions[5]}
          body_text={body_texts[2]}
        />
        <CustomCard
          title={titles[6]}
          description={descriptions[6]}
          body_text={body_texts[3]}
        />
        <CustomCard title={titles[7]} description={descriptions[7]} />
      </div>
    </div>
  );
};

export default BentoGrid;
