import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-damask-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:py-16 grid gap-y-6 md:grid-cols-3 text-white px-4 py-8">
        <div className="flex flex-col">
          <h2 className="font-bold text-lg md:text-xl">
            Adresa <FontAwesomeIcon icon={faMapMarkerAlt} size="sm" />
          </h2>
          <p>
            Libouň 1<br />
            257 06 Zvěstov
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-lg md:text-xl">
            Otevírací doba <FontAwesomeIcon icon={faClock} size="sm" />
          </h2>
          <ul>
            <li>Čtvrtek - 11:00 - 22:00</li>
            <li>Pátek - 11:00 - 23:00</li>
            <li>Sobota - 11:00 - 23:00</li>
            <li>Neděle - 11:00 - 16:00</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-lg md:text-xl">Sociální sítě</h2>
          <div className="flex space-x-3">
            <a
              href="https://www.facebook.com/liboun/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/zamek.liboun/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
