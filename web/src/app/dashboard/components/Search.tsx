import { TextField } from '@mui/material';

export const Search = () => {
	return (
		<TextField
			label="Search"
			size="small"
			InputProps={{ sx: { borderRadius: 10, fontSize: 12, width: 300 } }}
			InputLabelProps={{ sx: { fontSize: 12 } }}
		/>
	);
};

export default Search;
