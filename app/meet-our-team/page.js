import MeetOurTeam from "@/components/About/MeetOurTeam";

const page = async () => {
  const res = await fetch("https://habson-admin.vercel.app/api/teams", {
    next: { revalidate: 10 },
  });
  const teamsData = await res.json();
  return (
    <div className=" relative z-[110] bg-white font-sora rounded-b-[20px] lg:rounded-b-[40px]">
      <div className="flex justify-center py-10 ">
        <h2 className="text-2xl  md:text-[48px] font-bold text-[#127acc]">
          Our Team
        </h2>
      </div>
      <div className="px-[10%] xl:px-[15%]">
        <MeetOurTeam teamsData={teamsData} />
      </div>
    </div>
  );
};

export default page;
