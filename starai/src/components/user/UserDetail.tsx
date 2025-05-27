import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {
    getUserDetailById,
    changeUserAvatarById,
    uploadRequestPartner,
} from '@/services/user/userService';
import { Card, CardContent, CardDescription } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { useTranslation } from 'react-i18next';
const UserDetail = () => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const [userDetail, setUserDetail] = useState<any>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const { role } = useAuth();
    useEffect(() => {
        if (id) {
            getUserDetailById(id)
                .then((data) => setUserDetail(data))
                .catch((error) => console.error('Error fetching user details:', error));
        }
    }, [id]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };
    console.log('userDetail', userDetail);

    const handleSubmit = async () => {
        if (!id || !selectedFile) return;

        setIsUploading(true);
        const formData = new FormData();
        formData.append('avatar', selectedFile);

        try {
            await changeUserAvatarById(id, formData);
            const updatedUser = await getUserDetailById(id);
            setUserDetail(updatedUser);
            alert('Đổi ảnh đại diện thành công!');
        } catch (error) {
            console.error('Error updating avatar:', error);
            alert('Có lỗi xảy ra khi đổi ảnh đại diện.');
        } finally {
            setIsUploading(false);
        }
    };

    const [organization, setOrganization] = useState('');
    const [licenseNumber, setLicenseNumber] = useState('');
    const handleRequestPartner = async () => {
        if (!id || !organization || !licenseNumber) {
            alert('Vui lòng điền đầy đủ thông tin');
            return;
        }

        setIsUploading(true);
        try {
            await uploadRequestPartner(id, {
                organization,
                licenseNumber,
            });
            alert(t('my-account.request-partner-success'));
            const updatedUser = await getUserDetailById(id);
            setUserDetail(updatedUser);
        } catch (error) {
            console.error(t('my-account.request-partner-failure'), error);
            alert(t('my-account.request-partner-failure'));
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div>
            {userDetail ? (
                <div className="flex justify-between gap-4">
                    <Card className="w-[25vw]">
                        <AspectRatio ratio={1 / 1} className="flex items-center justify-center">
                            <img
                                src={userDetail.avatar}
                                alt="Image"
                                className="rounded-md object-cover"
                            />
                        </AspectRatio>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">{t('my-account.edit-avatar')}</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>{t('my-account.edit-avatar')}</DialogTitle>
                                    <DialogDescription>
                                        <br />
                                        <span>5MB</span>
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid w-full max-w-sm items-center gap-1.5">
                                        <Label htmlFor="picture">{t('my-account.picture')}</Label>
                                        <Input
                                            id="picture"
                                            type="file"
                                            onChange={handleFileChange}
                                            disabled={isUploading}
                                        />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button onClick={handleSubmit} disabled={isUploading}>
                                        {isUploading
                                            ? t('my-account.isUploading')
                                            : t('my-account.submit')}
                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                        {role !== 'PARTNER' && (
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline">
                                        {t('my-account.request-partner')}
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>{t('my-account.request-partner')}</DialogTitle>
                                        <DialogDescription>
                                            <span>
                                                {t('my-account.input-info-request-partner')}
                                            </span>
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid w-full max-w-sm items-center gap-1.5">
                                            <Label htmlFor="organization">
                                                {t('my-account.organization-name')}
                                            </Label>
                                            <Input
                                                id="organization"
                                                type="text"
                                                onChange={(e) => setOrganization(e.target.value)}
                                                disabled={isUploading}
                                            />
                                        </div>
                                        <div className="grid w-full max-w-sm items-center gap-1.5">
                                            <Label htmlFor="licenseNumber">
                                                {t('my-account.business-license')}
                                            </Label>
                                            <Input
                                                id="licenseNumber"
                                                type="text"
                                                onChange={(e) => setLicenseNumber(e.target.value)}
                                                disabled={isUploading}
                                            />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button
                                            onClick={handleRequestPartner}
                                            disabled={isUploading}
                                        >
                                            {isUploading
                                                ? t('my-account.isUploading')
                                                : t('my-account.submit')}
                                        </Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        )}
                        <Button variant="outline">{t('my-account.disable-account')}</Button>
                        <Button variant="outline">{t('my-account.edit-info')}</Button>
                    </Card>

                    <Card className="w-[75vw]">
                        {role === 'PARTNER' && (
                            <div className="mb-4 flex justify-end">
                                <h1 className="bg-amber-500 rounded mr-4 px-4 py-2">
                                    {t('my-account.partner')}
                                </h1>
                            </div>
                        )}
                        <CardContent>
                            <CardDescription>Email: {userDetail.email}</CardDescription>
                        </CardContent>
                    </Card>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UserDetail;
