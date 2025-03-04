import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
    }));

    const projects = [
        {
            title: "Duallas Restaurant",
            subtitle: "Jul 2023 - Dez 2023",
            srcImg: "/assets/images/project-trello.png",
            description: "Projeto desenvolvido durante a FSW cosiste em um sistema de gerenciamento de pedidos de um restaurante fictício chamado Duallas. O sistema permite que o usuário faça login, visualize o cardápio, adicione itens ao carrinho, remova itens do carrinho, visualize o carrinho, faça o pedido e visualize o pedido. O sistema também permite que o usuário faça logout e visualize o histórico de pedidos.", 
            technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
            websiteURL: "https://pad-port-donalds-vkts.vercel.app/duallas-donalds",
            codeURL: "https://github.com/pedroallas/pad-port-donalds.git",
        },
        {
            title: "Project Exemple",
            subtitle: "Jul 2023 - Dez 2023",
            srcImg: "/assets/images/project-financas.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris. Phasellus a ultrices elit. Curabitur ut diam eu orci auctor pretium.",
            technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
            websiteURL: "https://trello.com/",
            codeURL: "https://github.com/",
        },
        {
            title: "Project Craze Maze",
            subtitle: "Jul 2019 - May 2019",
            srcImg: "/assets/images/project1-craze-maze.gif",
            description: "Game to escape the maze, but not only that. An algorithm has been created that randomly generates a new maze each time the game is started. In this game, the user can use the keyboard keys to move until they find the flag and win the game",
            technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
            websiteURL: "https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html",
            codeURL: "https://github.com/AdrianaSaty/ironhack-project1-craze-maze",
        },
        {
            title: "Project Blotting",
            subtitle: "Jul 2019 - May 2019",
            srcImg: "/assets/images/project2-blotting.png",
            description: "Game to escape the maze, but not only that. An algorithm has been created that randomly generates a new maze each time the game is started. In this game, the user can use the keyboard keys to move until they find the flag and win the game",
            technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
            websiteURL: "https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html",
            codeURL: "https://github.com/AdrianaSaty/ironhack-project1-craze-maze",
        },
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item md={6} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection;
