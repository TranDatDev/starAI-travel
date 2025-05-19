interface SimpleMapProps {
    lng: number;
    lat: number;
}

const SimpleMap = (props: SimpleMapProps) => {
    return (
        <div>
            <iframe
                width="100%"
                height="400px"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=&q=${props.lat},${props.lng}`}
            ></iframe>
        </div>
    );
};

export default SimpleMap;
