import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import DateFnsUtils from "@date-io/date-fns";
import { KeyboardTimePicker, KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { useState } from 'react'


export default function MeetFirstStep({ handleNext, handleBack, handleChange, values: { date, phone, time }, filedError, isError }){
    //const [selectedTime, handleTimeChange] = useState("2018-01-01T00:00:00.000Z");
    //const [selectedDate, handleDateChange] = useState(new Date());
    const isEmpty = true;
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            fullWidth
                            name= 'date'
                            autoOk
                            variant="inline"
                            inputVariant="outlined"
                            label="With keyboard"
                            format="MM/dd/yyyy"
                            value={date}
                            InputAdornmentProps={{ position: "start" }}
                            onChange={handleChange('date')}

                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs ={12}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardTimePicker
                            fullWidth
                            name='time'
                            ampm={false}
                            variant="inline"
                            label="With keyboard"
                            value={time}
                            onChange={handleChange('time')}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
            
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Número de teléfono"
                        name="phone"
                        placeholder="i.e: xxx-xxx-xxxx"
                        defaultValue={phone}
                        onChange={handleChange('phone')}
                        margin="normal"
                        error={filedError.phone !== ''}
                        helperText={filedError.phone !== '' ? `${filedError.phone}` : ''}
                    />
                </Grid>
            </Grid>

            <div style={{ display: 'flex', marginTop: 50, justifyContent: 'flex-end' }}>
                <Button variant="contained" color="default" onClick={handleBack} style={{ marginRight: 20 }}>
                    Back
                </Button>
                <Button variant="contained" disabled={!isEmpty || isError} color="primary" onClick={handleNext}>
                    Next
                </Button>
            </div>
        </>
    )
    
}