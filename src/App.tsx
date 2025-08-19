import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import ImageCarousel from './ImageCarousel';
import AgendaList from './AgendaList';
import SaveTheDate from './SaveTheDate';
import VideoMessage from './VideoMessage';

import LocationTabs from './Locationtabs';
export default function WeddingCard() {
  return (
    <div className="container py-5">
      <h1 className="text-center display-4 mb-5">You're Invited to Our Wedding!</h1>

      <ImageCarousel />
      <SaveTheDate />

      <AgendaList />
      <LocationTabs/>
     
      <VideoMessage />
    </div>
  );
}
