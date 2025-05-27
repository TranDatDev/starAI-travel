import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AnimatedBox from '@/components/AnimatedBox';
import { getAllPosts, uploadPost } from '@/services/user/userService';
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
const PostPage = () => {
    const { t } = useTranslation();
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const [imageFile, setImageFile] = useState<File | null>(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isUploading, setIsUploading] = useState(false);

    const fetchPosts = async () => {
        try {
            const res = await getAllPosts();
            setPosts(res || []);
        } catch (error) {
            setPosts([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImageFile(e.target.files[0]);
        }
    };

    const handleSubmit = async () => {
        if (!title || !content || !imageFile) return;

        setIsUploading(true);
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('image', imageFile);

        try {
            await uploadPost(formData);
            setTitle('');
            setContent('');
            setImageFile(null);
            await fetchPosts();
        } catch (err) {
            console.error('Failed to create post', err);
        } finally {
            setIsUploading(false);
        }
    };
    const role = localStorage.getItem('role') || 'USER';

    return (
        <AnimatedBox>
            <div className="py-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl font-bold">{t('my-post.title')}</h2>
                    {role === 'PARTNER' && (
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">{t('my-post.create')}</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[500px]">
                                <DialogHeader>
                                    <DialogTitle>{t('my-post.create')}</DialogTitle>
                                    <DialogDescription>
                                        {t('my-post.max-size')} 5MB
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div>
                                        <Label htmlFor="title" className="mb-2">
                                            {t('my-post.post-title')}
                                        </Label>
                                        <Input
                                            id="title"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            placeholder={t('my-post.post-title')}
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="content" className="mb-2">
                                            {t('my-post.post-content')}
                                        </Label>
                                        <Input
                                            id="content"
                                            value={content}
                                            onChange={(e) => setContent(e.target.value)}
                                            placeholder={t('my-post.post-content')}
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="image" className="mb-2">
                                            {t('my-post.post-image')}
                                        </Label>
                                        <Input
                                            id="image"
                                            type="file"
                                            onChange={handleFileChange}
                                            disabled={isUploading}
                                        />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button onClick={handleSubmit} disabled={isUploading}>
                                        {isUploading ? 'Uploading...' : t('my-post.submit')}
                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    )}
                </div>

                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div className="grid gap-6">
                        {posts.map((post) => (
                            <div key={post.id} className="rounded shadow p-4 border">
                                {post.imageUrl && (
                                    <img
                                        src={post.imageUrl}
                                        alt={post.title}
                                        className="w-full h-70 object-cover rounded mb-3"
                                    />
                                )}
                                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                                <p className="text-sm">{post.content}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </AnimatedBox>
    );
};

export default PostPage;
