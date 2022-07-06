import { Input, Button } from '@mui/material';

const SearchBar = () => {

  return (
    <div className="my-4">
      <Input type="text"  placeholder='Search your toon' style={{ marginLeft: "450px", height: "6vh", width: "20vw" }}/>
      <Button style={{background:"orange", color:"white"}}>
        Search
      </Button>
    </div>
  )
}

export default SearchBar;
