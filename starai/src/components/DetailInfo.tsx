import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';
import { fetchDetail } from '@/services/api';
import { useReactToPrint } from 'react-to-print';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import StarRatingOfficial from './StarRatingOfficial';
import StarRatingUser from './StarRatingUser';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import CardSingleDetail from './CardSingleDetail';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';
import DetailCarousel from './DetailCarousel';
interface Props {
    service: string;
}

const DetailInfo = ({ service }: Props) => {
    const { id } = useParams();
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const { t } = useTranslation();
    const contentRef = useRef<HTMLDivElement>(null);
    const reactToPrintFn = useReactToPrint({
        contentRef,
        pageStyle: '@media print {.no-print { display: none; }}',
    });

    const exportToWord = async () => {
        if (!data) return;

        const doc = new Document({
            sections: [
                {
                    children: [
                        new Paragraph({
                            children: [new TextRun({ text: data.name, bold: true, size: 32 })],
                        }),
                        new Paragraph(data.fullAddress),
                        ...(data.tags || []).map(
                            (tag: string) =>
                                new Paragraph({
                                    children: [new TextRun({ text: `#${tag}`, color: '0070C0' })],
                                })
                        ),
                        ...(data.maxGuests
                            ? [
                                  new Paragraph(
                                      `${t('details.info.max-guests.label')}: ${data.maxGuests}`
                                  ),
                              ]
                            : []),
                        ...(data.maxRooms
                            ? [
                                  new Paragraph(
                                      `${t('details.info.max-guests.label')}: ${data.maxRooms}`
                                  ),
                              ]
                            : []),
                        ...(data.contactEmail
                            ? [new Paragraph(`${t('details.info.email')}: ${data.contactEmail}`)]
                            : []),
                        ...(data.contactPhone
                            ? [new Paragraph(`${t('details.info.phone')}: ${data.contactPhone}`)]
                            : []),
                    ],
                },
            ],
        });

        const blob = await Packer.toBlob(doc);
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${data.name}_${t('details.file-type-docx-download-label')}.docx`;
        link.click();
        URL.revokeObjectURL(url);
    };

    useEffect(() => {
        if (service && id) {
            setLoading(true);
            fetchDetail(service, id)
                .then((res) => setData(res))
                .catch((err) => console.error('Error fetching detail:', err))
                .finally(() => setLoading(false));
        }
    }, [service, id]);
    console.log('Data:', data);
    if (loading) return <p>Loading...</p>;
    if (!data) return <p>Không tìm thấy dữ liệu!</p>;

    return (
        <main>
            <div ref={contentRef}>
                <section>
                    <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                        <h1 className="text-3xl font-bold">{data.name}</h1>
                        <StarRatingOfficial rating={data.officialRating} />
                    </div>
                    <h2 className="text-xl font-semibold">{`${data.fullAddress}`}</h2>
                    <div className="flex flex-wrap gap-2 my-4">
                        {data.tags?.map((tag: string, index: number) => (
                            <div
                                key={index}
                                className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                </section>
                <section className="mt-8 no-print">
                    <h2 className="text-xl font-semibold">{t('details.img.label')}</h2>
                    <h3>{t('details.img.description')}</h3>
                    <div className="py-4">
                        <DetailCarousel images={data.images} />
                    </div>
                </section>
                <section className="mt-8">
                    <h2 className="text-xl font-semibold">{t('details.info.label')}</h2>
                    <h3>{t('details.info.description')}</h3>
                    {(data.minPrice || data.maxPrice) && (
                        <div className="flex flex-col lg:flex-row gap-4 lg:space-x-4 mt-4">
                            {data.minPrice && (
                                <CardSingleDetail
                                    title={t('details.info.min-price.label')}
                                    description={t('details.info.min-price.description')}
                                    value={data.minPrice}
                                    isCurrency={true}
                                />
                            )}
                            {data.maxPrice && (
                                <CardSingleDetail
                                    title={t('details.info.max-price.label')}
                                    description={t('details.info.max-price.description')}
                                    value={data.maxPrice}
                                    isCurrency={true}
                                />
                            )}
                        </div>
                    )}
                    {(data.maxGuests || data.maxRooms) && (
                        <div className="flex flex-col lg:flex-row gap-4 lg:space-x-4 mt-4">
                            {data.maxGuests && (
                                <CardSingleDetail
                                    title={t('details.info.max-guests.label')}
                                    description={t('details.info.max-guests.description')}
                                    value={data.maxGuests}
                                />
                            )}
                            {data.maxRooms && (
                                <CardSingleDetail
                                    title={t('details.info.max-rooms.label')}
                                    description={t('details.info.max-rooms.description')}
                                    value={data.maxRooms}
                                />
                            )}
                        </div>
                    )}
                    {(data.contactEmail || data.contactPhone) && (
                        <div className="flex flex-col lg:flex-row gap-4 lg:space-x-4 mt-4">
                            {data.contactEmail && (
                                <CardSingleDetail
                                    title={t('details.info.email.label')}
                                    description={t('details.info.email.description')}
                                    value={data.contactEmail}
                                />
                            )}
                            {data.contactPhone && (
                                <CardSingleDetail
                                    title={t('details.info.phone.label')}
                                    description={t('details.info.phone.description')}
                                    value={data.contactPhone}
                                    isPhoneNumber={true}
                                />
                            )}
                        </div>
                    )}
                </section>
                <section className="mt-8">
                    <h2 className="text-xl font-semibold">{t('details.user-rating.label')}</h2>
                    <h3>{t('details.user-rating.description')}</h3>
                    <div className="flex justify-center py-4">
                        <StarRatingUser
                            rating={data.userRating}
                            size={80}
                            className="text-yellow-500"
                        />
                    </div>
                </section>
                <section className="mt-8 no-print">
                    <h2 className="text-xl font-semibold">{t('details.download.label')}</h2>
                    <h3>{t('details.download.description')}</h3>
                    <div className="flex justify-center gap-8 py-4">
                        <button
                            onClick={() => reactToPrintFn()}
                            className="bg-red-600 hover:bg-red-800 px-4 py-2 text-white rounded cursor-pointer"
                        >
                            <Icon icon="tabler:file-type-pdf" width={24} height={24} />
                        </button>
                        <button
                            onClick={exportToWord}
                            className="bg-blue-600 hover:bg-blue-800 px-4 py-2 text-white rounded cursor-pointer "
                        >
                            <Icon icon="tabler:file-type-docx" width={24} height={24} />
                        </button>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default DetailInfo;
