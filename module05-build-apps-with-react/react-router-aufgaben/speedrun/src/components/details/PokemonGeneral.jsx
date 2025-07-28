const PokemonGeneral = ({ id, name }) => {
  return (
    <div className="flex justify-around items-center mb-5">
      <h1 className="text-primary text-4xl capitalize">{name}</h1>
      <div className="avatar">
        <div className="w-56 rounded-full bg-black">
          <img
            src={`https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/other/official-artwork/${id}.png`}
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonGeneral;
