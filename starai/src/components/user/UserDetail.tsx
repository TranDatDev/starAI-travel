import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getUserDetailById, changeUserAvatarById } from '@/services/user/userService';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
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

const UserDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [userDetail, setUserDetail] = useState<any>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);

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
                                <Button variant="outline">Đổi ảnh đại diện</Button>
                            </DialogTrigger>
                            <Button variant="outline">Vô hiệu hóa tài khoản</Button>
                            <Button variant="outline">Lịch sử tài khoản</Button>
                            <Button variant="outline">Yêu cầu đối tác</Button>
                            <Button variant="outline">Cập nhật thông tin</Button>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Đổi ảnh đại diện</DialogTitle>
                                    <DialogDescription>
                                        <span>Chọn ảnh đại diện bạn muốn đổi ở dưới đây</span>
                                        <br />
                                        <span>Lưu ý: dung lượng tối đa 5MB</span>
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid w-full max-w-sm items-center gap-1.5">
                                        <Label htmlFor="picture">Picture</Label>
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
                                        {isUploading ? 'Đang tải lên...' : 'Xác nhận'}
                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </Card>

                    <Card className="w-[75vw]">
                        <CardHeader>
                            <CardTitle>{userDetail.name}</CardTitle>
                            <CardDescription>{userDetail.email}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div>Tên: Trần Thành Đạt</div>
                            <div>Ngày sinh: 2000-01-01</div>
                            <div>Giới tính: Nam</div>
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
