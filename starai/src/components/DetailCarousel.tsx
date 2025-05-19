import { Card, CardContent } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { useTranslation } from 'react-i18next';
interface Props {
    images: string[];
}

const DetailCarousel = ({ images }: Props) => {
    const { t } = useTranslation();
    return (
        <div>
            <Carousel
                className="w-full max-w-screen-xl mx-auto"
                opts={{
                    align: 'start',
                    loop: true,
                }}
            >
                <CarouselContent className="">
                    {images.map((image, index) => (
                        <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <Dialog>
                                            <DialogTrigger>
                                                <img
                                                    src={image}
                                                    alt={`Slide ${index + 1}`}
                                                    className="object-cover w-full h-full"
                                                />
                                            </DialogTrigger>
                                            <DialogContent className="min-w-[70vw] h-[80vh]">
                                                <DialogTitle className="text-center text-2xl font-bold">
                                                    {t('details.img.expand.label')}
                                                </DialogTitle>
                                                <DialogHeader>
                                                    <DialogDescription className="m-4">
                                                        <img
                                                            src={image}
                                                            alt={`Slide ${index + 1}`}
                                                            className="object-contain w-full h-full max-h-[70vh] mx-auto"
                                                        />
                                                    </DialogDescription>
                                                </DialogHeader>
                                            </DialogContent>
                                        </Dialog>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="lg:-left-16 hidden lg:flex" />
                <CarouselNext className="lg:-right-16 hidden lg:flex" />
            </Carousel>
        </div>
    );
};

export default DetailCarousel;
