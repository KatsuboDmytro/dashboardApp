import { Box, useTheme } from "@mui/material";
import {Header} from "../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page">
            </Header>
            <Accordion defaultExpanded>
                    <AccordionSummary expandIacon={<ExpandMoreIcon />}>
                        <Typography color={colors.greenAccent[500]} variant="h5">
                            An important question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quam minus veritatis molestiae alias iusto molestias praesentium libero labore aliquam, reprehenderit excepturi, officiis dolores, exercitationem impedit dignissimos. Eos, culpa deserunt?
                            Iusto quos iure officia iste deserunt incidunt modi, vitae dignissimos totam veritatis corporis eaque delectus labore debitis odit nihil beatae ratione voluptatum natus voluptates adipisci nam velit! Accusamus, exercitationem rerum.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion defaultExpanded>
                    <AccordionSummary expandIacon={<ExpandMoreIcon />}>
                        <Typography color={colors.greenAccent[500]} variant="h5">
                            Another important question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quam minus veritatis molestiae alias iusto molestias praesentium libero labore aliquam, reprehenderit excepturi, officiis dolores, exercitationem impedit dignissimos. Eos, culpa deserunt?
                            Iusto quos iure officia iste deserunt incidunt modi, vitae dignissimos totam veritatis corporis eaque delectus labore debitis odit nihil beatae ratione voluptatum natus voluptates adipisci nam velit! Accusamus, exercitationem rerum.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion defaultExpanded>
                    <AccordionSummary expandIacon={<ExpandMoreIcon />}>
                        <Typography color={colors.greenAccent[500]} variant="h5">
                            Favourite question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quam minus veritatis molestiae alias iusto molestias praesentium libero labore aliquam, reprehenderit excepturi, officiis dolores, exercitationem impedit dignissimos. Eos, culpa deserunt?
                            Iusto quos iure officia iste deserunt incidunt modi, vitae dignissimos totam veritatis corporis eaque delectus labore debitis odit nihil beatae ratione voluptatum natus voluptates adipisci nam velit! Accusamus, exercitationem rerum.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion defaultExpanded>
                    <AccordionSummary expandIacon={<ExpandMoreIcon />}>
                        <Typography color={colors.greenAccent[500]} variant="h5">
                            Top question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quam minus veritatis molestiae alias iusto molestias praesentium libero labore aliquam, reprehenderit excepturi, officiis dolores, exercitationem impedit dignissimos. Eos, culpa deserunt?
                            Iusto quos iure officia iste deserunt incidunt modi, vitae dignissimos totam veritatis corporis eaque delectus labore debitis odit nihil beatae ratione voluptatum natus voluptates adipisci nam velit! Accusamus, exercitationem rerum.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion defaultExpanded>
                    <AccordionSummary expandIacon={<ExpandMoreIcon />}>
                        <Typography color={colors.greenAccent[500]} variant="h5">
                            Your question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quam minus veritatis molestiae alias iusto molestias praesentium libero labore aliquam, reprehenderit excepturi, officiis dolores, exercitationem impedit dignissimos. Eos, culpa deserunt?
                            Iusto quos iure officia iste deserunt incidunt modi, vitae dignissimos totam veritatis corporis eaque delectus labore debitis odit nihil beatae ratione voluptatum natus voluptates adipisci nam velit! Accusamus, exercitationem rerum.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion defaultExpanded>
                    <AccordionSummary expandIacon={<ExpandMoreIcon />}>
                        <Typography color={colors.greenAccent[500]} variant="h5">
                            Ilon Mack question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quam minus veritatis molestiae alias iusto molestias praesentium libero labore aliquam, reprehenderit excepturi, officiis dolores, exercitationem impedit dignissimos. Eos, culpa deserunt?
                            Iusto quos iure officia iste deserunt incidunt modi, vitae dignissimos totam veritatis corporis eaque delectus labore debitis odit nihil beatae ratione voluptatum natus voluptates adipisci nam velit! Accusamus, exercitationem rerum.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
        </Box>
    )
}

export default FAQ;