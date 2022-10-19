import { Card, CardContent, CardMedia, Tooltip, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from '../utils/constants';
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { sx: '100%', sm: '358px', md: '320px' },
        boxShadow: 'none',
        borderRadius: '0',
      }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Tooltip title={snippet?.title || demoVideoTitle}>
            <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
              {snippet?.title.length > 60 ? '...' : ''}
            </Typography>
          </Tooltip>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant='subtitle2' fontWeight='bold' color='gray' mt='25px'>
            {snippet?.channelTitle || demoChannelTitle}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
