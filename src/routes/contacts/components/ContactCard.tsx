import {Link} from 'react-router-dom';

type ContactCardProps = {
  id: string;
  name: string;
  avatar: string;
  createdAt: number;
};

export const ContactCard = ({
  name,
  id,
  avatar,
  createdAt,
}: ContactCardProps) => {
  return (
    <Link
      to={`/contacts/${id}`}
      className="contact-card"
    >
      <img
        src={avatar}
        alt={name}
      />
      <div>
        <h2>{name}</h2>
        <div className="created-at">
          <p>Created at: {new Date(createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </Link>
  );
};
