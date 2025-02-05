import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const Input = () => {
  const name = ["jonh", "ton", "wick", "hung", "devid"];
  const movei100 = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
    {
      label: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
    { label: "The Good, the Bad and the Ugly", year: 1966 },
    { label: "Fight Club", year: 1999 },
    {
      label: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
    },
    {
      label: "Star Wars: Episode V - The Empire Strikes Back",
      year: 1980,
    },
  ];
  return (
    <div>
      <div className="py-3">
        <Autocomplete
          multiple
          limitTags={2}
          disablePortal
          options={name}
          sx={{ width: 600 }}
          renderInput={(params) => <TextField {...params} label="Name " />}
        />
      </div>
      <div className="my-3">
        <Autocomplete
          multiple
          defaultValue={[movei100[0], movei100[1]]}
          limitTags={2}
          disablePortal
          options={movei100}
          sx={{ width: 600 }}
          renderInput={(params) => <TextField {...params} label="movei " />}
        />
      </div>
      
    </div>
  );
};

export default Input;
