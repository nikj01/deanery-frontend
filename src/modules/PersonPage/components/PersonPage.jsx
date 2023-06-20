import {Button, Card, CardActions, CardContent, CardHeader, Typography} from "@mui/material";
import {usePerson} from "../store.jsx";
import {useEffect} from "react";
import {useAuth} from "../../../context/hooks/useAuth.jsx";

const PersonPage = () => {
// function PersonPage() {
    const {personId, password} = useAuth();

    const person = usePerson((state) => state.person);
    const fetchPerson = usePerson((state) => state.fetchPerson);

    const onBtnClick = () => {
        fetchPerson(personId, password);
    }

    useEffect(() => {
        fetchPerson(personId, password);
    }, [])

    console.log(person);

    return (
        <Card>
            <CardHeader title="Інформація про користувача">
                {/*<Typography variant="h5">Інформація про користувача</Typography>*/}
            </CardHeader>
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    Прізвище
                </Typography>
                <Typography>
                    {person.surname}
                </Typography>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    Ім'я
                </Typography>
                <Typography>
                    {person.name}
                </Typography>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    По батькові
                </Typography>
                <Typography>
                    {person.patronymic}
                </Typography>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    Дата народження
                </Typography>
                <Typography>
                    {person.dateOfBirth}
                </Typography>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    Електронна пошта
                </Typography>
                <Typography>
                    {person.email}
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Button
                    variant="outlined"
                    color="primary"
                    href="/main"

                >
                    На головну
                </Button>
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={onBtnClick}
                    sx={{mt: '1rem'}}
                >
                    Детальніше
                </Button>
            </CardActions>
        </Card>
    );
}
export default PersonPage;
