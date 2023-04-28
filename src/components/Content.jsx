import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const Accordion = styled((props) => (
    <MuiAccordion elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid #3574F2`,
    borderRadius: "10px",
    '&:before': {
        display: 'none',
    },
    '&.Mui-expanded': {
        borderRadius: "10px",
        borderTop: `1px solid #3574F2`,
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
    '&.Mui-expanded': {
        borderRadius: "10px 10px 0 0",
        backgroundColor: '#3574F2',
        color: 'white',
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: '0px',
  display: 'contents',
}));

function Content() {
  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = (panel) => {
    setExpanded(panel == expanded ? '' : panel);
  };
  const [data, setData] = React.useState([])
  React.useEffect(() => {
  if (!window.first_render) {
      fetch('///').then((res) => {
      }).catch(() => {
          const buses = {}
          const res = [{transport_id:10,lat:"47.260002",lon:"39.674907",speed:33,angle:106,created_at:"12:55:02 27.04.2023"},
          {transport_id:1178,lat:"47.262184",lon:"39.780495",speed:40,angle:110,created_at:"12:55:01 27.04.2023"},{transport_id:130,lat:"47.241005",lon:"39.587303",speed:0,angle:252,created_at:"12:55:01 27.04.2023"},{transport_id:3798,lat:"47.280193",lon:"39.768402",speed:34,angle:38,created_at:"12:55:01 27.04.2023"},{transport_id:10,lat:"47.256957",lon:"39.642802",speed:48,angle:72,created_at:"12:50:01 27.04.2023"},{transport_id:130,lat:"47.226345",lon:"39.737080",speed:0,angle:252,created_at:"12:50:01 27.04.2023"},{transport_id:10,lat:"47.240388",lon:"39.614028",speed:44,angle:0,created_at:"12:45:01 27.04.2023"},{transport_id:130,lat:"47.226345",lon:"39.737080",speed:0,angle:252,created_at:"12:45:01 27.04.2023"},{transport_id:130,lat:"47.226345",lon:"39.737080",speed:0,angle:252,created_at:"12:40:01 27.04.2023"},{transport_id:130,lat:"47.226345",lon:"39.737080",speed:0,angle:252,created_at:"12:35:01 27.04.2023"},{transport_id:130,lat:"47.226345",lon:"39.737080",speed:0,angle:252,created_at:"12:30:01 27.04.2023"},{transport_id:130,lat:"47.226345",lon:"39.737080",speed:0,angle:252,created_at:"12:25:02 27.04.2023"},{transport_id:130,lat:"47.226345",lon:"39.737080",speed:0,angle:252,created_at:"12:20:02 27.04.2023"},{transport_id:130,lat:"47.226345",lon:"39.737080",speed:0,angle:252,created_at:"12:15:02 27.04.2023"},{transport_id:130,lat:"47.226345",lon:"39.737080",speed:0,angle:252,created_at:"12:10:01 27.04.2023"},{transport_id:1550,lat:"47.194162",lon:"39.616162",speed:2,angle:220,created_at:"12:10:01 27.04.2023"},{transport_id:5330,lat:"47.241572",lon:"39.587568",speed:3,angle:188,created_at:"12:10:01 27.04.2023"},{transport_id:5959,lat:"47.241652",lon:"39.587710",speed:0,angle:2,created_at:"12:10:01 27.04.2023"},{transport_id:8421,lat:"47.258265",lon:"39.803890",speed:0,angle:225,created_at:"12:10:01 27.04.2023"},{transport_id:8422,lat:"47.258310",lon:"39.803969",speed:0,angle:251,created_at:"12:10:01 27.04.2023"},{transport_id:130,lat:"47.226345",lon:"39.737080",speed:0,angle:252,created_at:"12:05:01 27.04.2023"},{transport_id:1550,lat:"47.194162",lon:"39.616162",speed:2,angle:220,created_at:"12:05:01 27.04.2023"},{transport_id:5330,lat:"47.241572",lon:"39.587568",speed:3,angle:188,created_at:"12:05:01 27.04.2023"},{transport_id:5959,lat:"47.241652",lon:"39.587710",speed:0,angle:2,created_at:"12:05:01 27.04.2023"},{transport_id:8421,lat:"47.258265",lon:"39.803890",speed:0,angle:225,created_at:"12:05:01 27.04.2023"},{transport_id:8422,lat:"47.258310",lon:"39.803969",speed:0,angle:251,created_at:"12:05:01 27.04.2023"},{transport_id:130,lat:"47.226345",lon:"39.737080",speed:0,angle:252,created_at:"12:00:02 27.04.2023"}]
          res.map( el => {
              if (!Object.keys(buses).includes(el.transport_id)) {
                  buses[el.transport_id] = {
                      id: el.transport_id,
                      open: false,
                      marks: [
                        {
                          angle: el.angle,
                          speed: el.speed,
                          lat: el.lat,
                          lon: el.lon,
                          time: el.created_at
                        }
                      ]
                  }
              } else {
                buses[el.transport_id].marks.push({
                  angle: el.angle,
                  speed: el.speed,
                  lat: el.lat,
                  lon: el.lon,
                  time: el.created_at
                })
              }
          })
        Object.keys(buses).map( el => {
          buses[el].marks = buses[el].marks.sort(function(a,b){
            return new Date(b.time) - new Date(a.time);
          });
        })
        setData(buses)
      })
  } else {
      window.first_render = true;
  }
  },[])


    function displayBuses () {
        return Object.keys(data).map((el,i) => {
            return  <div key={`accordion-${i}`}>
              
        <Accordion expanded={expanded === data[el].id}>
            <AccordionSummary onClick={()=>handleChange(data[el].id)} aria-controls="panel1d-content" id="panel1d-header">
              <div className='bus-info'>
                <Typography title={`Номер автобуса`}>Автобус №{data[el].id}</Typography>
                <Typography title={`Скорость`}>{data[el].marks[0].speed} км/ч</Typography>
                <Typography title={`Направление движения`}>{data[el].marks[0].angle}°</Typography>
                <Typography title={`Координаты`}>{data[el].marks[0].lat} / {data[el].marks[0].lon}</Typography>
                <Typography title={`Время`}>{data[el].marks[0].time}</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
            <div className='datalense'>
              <iframe className={expanded === data[el].id ? 'show' : 'hide'} src={`https://datalens.yandex/hwh2kbt65jum7?created_at_7dii=__between___interval_2021-06-15T00%3A00%3A00.000Z_2021-06-15T23%3A59%3A59.999Z&transport_id_339j=__eq_${data[el].id}`} width="600" height="400" frameborder="0"></iframe>
              <iframe className={expanded === data[el].id ? 'show' : 'hide'} src={`https://datalens.yandex/5k6t5gw7u0wqv?transport_id_6ir5=__eq_${data[el].id}`} width="600" height="400" frameborder="0"></iframe>
              </div>
              <List>
                {(() => {
                  return [
                    <div key={`accordion-${i}-list-headers`}>
                    <ListItem disablePadding >
                    <ListItemButton>
                      <div className='desktop-list-headers mark mark-labels'>
                        <ListItemText primary='км/ч' />
                        <ListItemText primary='направление' />
                        <ListItemText primary='координаты' />
                        <ListItemText primary='время' />
                      </div>
                    </ListItemButton>
                  </ListItem>
                  </div>,
                  ...data[el].marks.map((mark, i) => {
                    return  <div key={`${data[el].id}-${i}-listitem`}>
                        <div className={"desktop"}>
                            <ListItem disablePadding >
                                <ListItemButton>
                                    <div className='mark'>
                                        <ListItemText primary={mark.speed} />
                                        <ListItemText primary={mark.angle} />
                                        <ListItemText primary={`${mark.lat} / ${mark.lon}`} />
                                        <ListItemText primary={mark.time} />
                                    </div>
                                </ListItemButton>
                            </ListItem>
                        </div>
                        <div className={"mobile"}>
                            <ListItem disablePadding >
                                <ListItemButton>
                                    <div className='mark'>
                                        <ListItemText primary={'км/ч'} />
                                        <ListItemText primary={mark.speed} />
                                    </div>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding >
                                <ListItemButton>
                                    <div className='mark'>
                                        <ListItemText primary={'направление'} />
                                        <ListItemText primary={mark.angle} />
                                    </div>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding >
                                <ListItemButton>
                                    <div className='mark'>
                                        <ListItemText primary={'координаты'} />
                                        <ListItemText primary={`${mark.lat} / ${mark.lon}`} />
                                    </div>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding >
                                <ListItemButton>
                                    <div className='mark'>
                                        <ListItemText primary={'время'} />

                                        <ListItemText primary={mark.time} />
                                    </div>
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                        </div>
                    </div>

                  })]
                })()}

              </List>
            </AccordionDetails>
          </Accordion>
          </div>
        })
    }
    return (
        <div className="contentWrapper">
            { displayBuses() }
        </div>
  );
}

export default Content;