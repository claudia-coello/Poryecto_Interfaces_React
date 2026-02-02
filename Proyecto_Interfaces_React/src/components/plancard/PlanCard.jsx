import { useNavigate } from "react-router-dom";

function PlanCard({ plan, costo, beneficios }) {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register", { state: { plan } });
  };

  return (
    <div className="bg-[#f8d77b] text-black w-[300px] rounded-[12px] p-[20px] shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.5)]">
      <h3 className="bg-[#243a63] text-white rounded-[8px] p-[10px]">
        Plan {plan}
      </h3>
      <ul className="text-left my-[15px]">
        <li>Costo: {costo}</li>
        {beneficios.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <button
        onClick={handleRegister}
        className="bg-[#243a63] text-white px-[20px] py-[10px] rounded-[10px] hover:bg-[#0e1a2a]"
      >
        Regístrese
      </button>
    </div>
  );
}

<<<<<<< HEAD
export default PlanCard;
=======
export default PlanCard;
>>>>>>> 94351e0d45791e95e89538d303c5f1e3e1ef6ede
