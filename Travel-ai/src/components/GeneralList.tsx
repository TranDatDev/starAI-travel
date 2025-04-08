import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { Icon } from '@iconify/react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { useTranslation } from 'react-i18next';
import AnimatedBox from '@/components/AnimatedBox';
import { Link } from 'react-router';
interface GeneralListProps {
    fetchData: (page: number, limit: number) => Promise<any>;
    category: string;
}
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
const GeneralList: React.FC<GeneralListProps> = ({ fetchData, category }) => {
    const { t } = useTranslation();
    const [searchParams, setSearchParams] = useSearchParams();
    const page = Number(searchParams.get('page')) || 1;
    const limit = 10;
    const [isTwoColumns, setIsTwoColumns] = useState<boolean>(false);
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        setLoading(true);
        fetchData(page, limit)
            .then(setData)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [page, limit]);

    const handlePageChange = (newPage: number) => {
        setSearchParams({ page: String(newPage) }, { replace: true });
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const totalPages = data?.totalPages || 1;

    return (
        <AnimatedBox>
            <div className="space-y-4">
                <div className="flex gap-2">
                    <Button
                        onClick={() => setIsTwoColumns(false)}
                        className={`p-2 flex items-center gap-2 rounded transition ${
                            !isTwoColumns ? 'bg-blue-600' : ''
                        }`}
                    >
                        <Icon icon="mdi:view-agenda" className="text-lg" />
                    </Button>

                    <Button
                        onClick={() => setIsTwoColumns(true)}
                        className={`p-2 flex items-center gap-2 rounded transition ${
                            isTwoColumns ? 'bg-yellow-500' : ''
                        }`}
                    >
                        <Icon icon="mdi:view-grid" className="text-lg" />
                    </Button>
                </div>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                label={t('pagination.previous')}
                                onClick={() => handlePageChange(Math.max(page - 1, 1))}
                            />
                        </PaginationItem>

                        {[...Array(totalPages)].map((_, i) => {
                            const pageNumber = i + 1;
                            return (
                                <PaginationItem key={pageNumber}>
                                    <PaginationLink
                                        isActive={page === pageNumber}
                                        onClick={() => handlePageChange(pageNumber)}
                                    >
                                        {pageNumber}
                                    </PaginationLink>
                                </PaginationItem>
                            );
                        })}

                        {totalPages > 5 && page < totalPages - 2 && (
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                        )}

                        <PaginationItem>
                            <PaginationNext
                                label={t('pagination.next')}
                                onClick={() => handlePageChange(Math.min(page + 1, totalPages))}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
                <div className={`grid ${isTwoColumns ? 'grid-cols-2' : 'grid-cols-1'} gap-4`}>
                    {data?.data?.slice(0, 10).map((item: any) => (
                        <Link to={`/${category}/${item.shortId}`} key={item.shortId}>
                            <Card key={item.shortId} className="px-2 py-8 rounded-lg shadow">
                                <CardContent>
                                    {' '}
                                    <h3 className="font-semibold text-lg">{item.name}</h3>
                                    <p className="text-sm">{item.location.address}</p>
                                    <p className="text-sm">{item.price}$</p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                label={t('pagination.previous')}
                                onClick={() => handlePageChange(Math.max(page - 1, 1))}
                            />
                        </PaginationItem>

                        {[...Array(totalPages)].map((_, i) => {
                            const pageNumber = i + 1;
                            return (
                                <PaginationItem key={pageNumber}>
                                    <PaginationLink
                                        isActive={page === pageNumber}
                                        onClick={() => handlePageChange(pageNumber)}
                                    >
                                        {pageNumber}
                                    </PaginationLink>
                                </PaginationItem>
                            );
                        })}

                        {totalPages > 5 && page < totalPages - 2 && (
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                        )}

                        <PaginationItem>
                            <PaginationNext
                                label={t('pagination.next')}
                                onClick={() => handlePageChange(Math.min(page + 1, totalPages))}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </AnimatedBox>
    );
};

export default GeneralList;
