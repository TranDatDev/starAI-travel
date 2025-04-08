import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';
import { fetchDetail } from '@/services/api';
import { useReactToPrint } from 'react-to-print';
interface Props {
    category: string;
}

const DetailInfo = ({ category }: Props) => {
    const { id } = useParams();
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const contentRef = useRef<HTMLDivElement>(null);
    const reactToPrintFn = useReactToPrint({
        contentRef,
        pageStyle: '@media print {.no-print { display: none; }}',
    });
    useEffect(() => {
        if (category && id) {
            setLoading(true);
            fetchDetail(category, id)
                .then((res) => setData(res))
                .catch((err) => console.error('Error fetching detail:', err))
                .finally(() => setLoading(false));
        }
    }, [category, id]);

    if (loading) return <p>Loading...</p>;
    if (!data) return <p>Không tìm thấy dữ liệu!</p>;
    return (
        <main>
            <div ref={contentRef}>
                <h1 className="text-3xl">{data.name}</h1>
                <h2 className="text-xl">
                    {`${data.location.address}, ${data.location.ward}, ${data.location.district}, ${data.location.province}`}
                </h2>
                <button onClick={() => reactToPrintFn()} className="no-print">
                    Print
                </button>
            </div>
        </main>
    );
};

export default DetailInfo;
