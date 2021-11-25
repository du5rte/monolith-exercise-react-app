import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type Option = { value: string, display: string }

interface Props {
  value: string
  options: Option[]
  onChange: (selectedOption: Option) => void
}

export default function SelectOptions(props: Props) {
  const { value, onChange, options } = props;

  const handleChange = (event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;

    if (onChange) {
      const selectedOption = options.find((o) => o.value === value);

      if (selectedOption) {
        onChange(selectedOption);
      }
    }
  };

  return (
    <FormControl sx={{ p: 1, width: 200 }}>
      <Select value={value} onChange={handleChange}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.display}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
