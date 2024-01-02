import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import Diversity2Icon from '@mui/icons-material/Diversity2';
import { yellow } from "@mui/material/colors";

const Dashboard = () => {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      {/* HEADER */}

      <Box
        display={smScreen ? "flex" : "block"}
        flexDirection={smScreen ? "row" : "column"}
        justifyContent={smScreen ? "space-between" : "start"}
        alignItems={smScreen ? "center" : "start"}
        m="10px 0"
      >
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {/*Email sent icon */}
      <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
            <Box
              width="100%"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="12"
                subtitle="Emails Sent"
                progress="0.75"
                increase="+14%"
                icon={
                  <EmailIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
          </Grid>

          {/*done Projects */}
          <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
            <Box
              width="100%"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="43"
                subtitle="Completed Projects"
                progress="0.50"
                increase="+21%"
                icon={
                  <Diversity2Icon
                    sx={{ color: colors.blueAccent[300], fontSize: "26px" }}
                  />
                }
              />
            </Box>
          </Grid>

          {/* Team members */}
          <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
            <Box
              width="100%"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="4"
                subtitle="Team Members"
                progress="0.30"
                increase="-5%"
                icon={
                  <PersonAddIcon
                    sx={{ color: colors.blueAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
          </Grid>

          <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
            <Box
              width="100%"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="1"
                subtitle="Issues"
                progress="0.80"
                increase="+3%"
                icon={
                  <TrafficIcon
                    sx={{ color: colors.redAccent[500], fontSize: "26px" }}
                  />
                }
              />
            </Box>
          </Grid>
          {/*Charts */}
          <Grid
            xs={12}
            sm={12}
            md={8}
            lg={8}
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {/*Project Descriptor */}
            <Grid xs={12}>
              <Box backgroundColor={colors.primary[400]}>
                <Box
                  mt="25px"
                  p="0 30px"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Typography
                      variant="h5"
                      fontWeight="600"
                      color={colors.grey[100]}
                    >
                      Project Desscriptor
                    </Typography>
                    <Typography
                      variant="h5"
                      fontWeight="600"
                      color={colors.greenAccent[500]}
                    >
                      12 projects
                    </Typography>
                  </Box>
                  <Box>
                    <IconButton>
                      <DownloadOutlinedIcon
                        sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                      />
                    </IconButton>
                  </Box>
                </Box>
                <Box height="250px" m="-20px 0 0 0">
                  <LineChart isDashboard={true} />
                </Box>
              </Box>
            </Grid>


            <Grid xs={12} sm={12} md={6}>
              <Box backgroundColor={colors.primary[400]} p="30px">
                <Typography variant="h5" fontWeight="600">
                  Project Success Rates
                </Typography>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  mt="25px"
                >
                  <ProgressCircle size="125" />
                  <Typography
                    variant="h5"
                    color={colors.greenAccent[500]}
                    sx={{ mt: "15px" }}
                  >
                    98.9 %
                  </Typography>
                  <Typography>
                    Includes foreign projects
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid xs={12} sm={12} md={6}>
              <Box backgroundColor={colors.primary[400]}>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  sx={{ padding: "30px 30px 0 30px" }}
                >
                  Used Languages
                </Typography>
                <Box height="250px" mt="-20px">
                  <BarChart isDashboard={true} />
                </Box>
              </Box>
            </Grid>
            <Grid xs={12}>
              <Box backgroundColor={colors.primary[400]} padding="30px">
                <Typography
                  variant="h5"
                  fontWeight="600"
                  sx={{ marginBottom: "15px" }}
                >
                  Clients
                </Typography>
                <Box height="200px">
                  <GeographyChart isDashboard={true} />
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
            <Box
              backgroundColor={colors.primary[400]}
              maxHeight="100vh"
              overflow="auto"
              m="25px 0 0 0"
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                color={colors.grey[100]}
                p="15px"
              >
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                  Your Completed Projects
                </Typography>
              </Box>
              {mockTransactions.map((transaction, i) => {
                return (
                  <Box
                    key={`${transaction}-${i}`}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottom={`4px solid ${colors.primary[500]}`}
                    p="15px"
                  >
                    <Box>
                      <Typography
                        variant="h5"
                        fontWeight="600"
                        color={colors.greenAccent[100]}
                      >
                        {transaction.txId}
                      </Typography>
                      <Typography color={colors.grey[100]}>
                        {transaction.user}
                      </Typography>
                    </Box>
                    <Box color={colors.grey[100]}>{transaction.date}</Box>
                    <Box
                      color={colors.greenAccent[500]}
                      p="5px 10px"
                      borderRadius="4px"
                    >
                      {transaction.cost}
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Grid>
          
      </Grid>
    </Box>
  );
};

export default Dashboard;
