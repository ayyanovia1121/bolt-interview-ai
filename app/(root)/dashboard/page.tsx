import AddNewInterwiew from "@/components/AddNewInterwiew"

const page = () => {
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold text-primary">Dashboard</h2>
      <h2 className=" text-gray-600">
        Create and Start Your Mock Interview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 my-5">
        <AddNewInterwiew />
      </div>
    </div>
  );
}

export default page