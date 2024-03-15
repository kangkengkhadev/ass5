"use client"
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem, TextField } from "@mui/material";

export default function DateReserve() {
    return (
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2
        w-fit px-10 py-5 flex flex-row justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"/>
            </LocalizationProvider>

            <Select variant="standard" id="hospital"
            className="h-[2em] w-[200px]" defaultValue="Chula">
                <MenuItem value="Chula" onClick={()=>alert("Chula")}>Chulalongkorn Hospital</MenuItem>
                <MenuItem value="Rajavithi" onClick={()=>alert("Rajavithi")}>Rajavithi Hospital</MenuItem>
                <MenuItem value="Thammasat" onClick={()=>alert("Thammasat")}>Thammasat University Hospital</MenuItem>
            </Select>
        </div>
    );
}