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
          const res = [
            {
               id: 97123557,
               transport_id: "10",
               lat: 47226287,
               lon: 39737388,
               speed: 45,
               angle: 75,
               created_at: "2022-01-10 08:00:02"
            },
            {
               id: 97123557,
               transport_id: "10",
               lat: 47226287,
               lon: 39737388,
               speed: 44,
               angle: 74,
               created_at: "2022-01-10 07:00:02"
            },
            {
               id: 97123557,
               transport_id: "14",
               lat: 47226287,
               lon: 39737388,
               speed: 44,
               angle: 74,
               created_at: "2022-01-10 07:00:02"
            },
            {
               id: 97123557,
               transport_id: "11",
               lat: 47226287,
               lon: 39737388,
               speed: 44,
               angle: 74,
               created_at: "2022-01-10 07:00:02"
            },
            {
               id: 97123557,
               transport_id: "10",
               lat: 47226287,
               lon: 39737388,
               speed: 43,
               angle: 73,
               created_at: "2022-01-10 09:00:02"
            },
            {
               id: 97123557,
               transport_id: "10",
               lat: 47226287,
               lon: 39737388,
               speed: 42,
               angle: 72,
               created_at: "2022-01-10 07:10:02"
            },
            {
               id: 97123557,
              transport_id: "10",
              lat: 47226287,
              lon: 39737388,
              speed: 41,
              angle: 71,
              created_at: "2022-01-10 07:05:02"
            },
          ]
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
              <iframe className={expanded === data[el].id ? 'show' : 'hide'} src={`https://datalens.yandex/hwh2kbt65jum7?created_at_7dii=__between___interval_2023-04-27T06%3A00%3A00.000Z_2023-04-27T09%3A59%3A59.000Z&transport_id_339j=__eq_${data[el].id}`} width="600" height="400" frameborder="0"></iframe>
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