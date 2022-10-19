import { Box, Typography } from '@mui/material';
import { Videos } from './';
import { fetchFromApi } from '../utils/fetchFromApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then(data => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant='h4' fontWeight='bold' b={2} sx={{ color: 'white' }}>
        Search Results for : <span style={{ color: '#f31503' }}>{searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
