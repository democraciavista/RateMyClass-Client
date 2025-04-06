'use client';

import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from '../../../components/ui/form';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import { toast } from '../../../hooks/use-toast';
import { NovaSenhaFormValues, novaSenhaSchema } from '@/validations/nova-senha';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { LogoUFPE } from '@/assets';
import { userService } from '@/services';

export default function LoginPage() {
    const router = useRouter();
    const params = useSearchParams();

    const email = params.get('email') || '/';

    const form = useForm<NovaSenhaFormValues>({
        resolver: zodResolver(novaSenhaSchema),
        defaultValues: {
            newPassword: '',
            confirmPassword: '',
            token: ''
        }
    });

    const loginMutation = useMutation({
        mutationFn: async () => {
            userService.verifyPassword({
                token: form.getValues('token') || '',
                email: email as string,
                newPassword: form.getValues('newPassword') || ''
            });
        },
        onSuccess: () => {
            toast({
                title: 'Senha redefinida com sucesso'
            });

            router.push('/auth/login');
        },
        onError: (error) => {
            toast({
                variant: 'destructive',
                title: 'Erro ao redefinir senha'
            });
        }
    });

    function onSubmit() {
        loginMutation.mutate();
    }

    return (
        <div className="flex h-screen w-full">
            <div className="hidden md:flex md:w-1/2 bg-blue-100 flex-col items-center justify-center p-8 text-center">
                <h1 className="text-4xl font-bold mb-4">
                    Bem vindo ao Rate My Class
                </h1>
                <Image
                    src={LogoUFPE}
                    alt="Logo da UFPE"
                    className="text-lg mb-8 h-4/6 w-5/12"
                />
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
                <Card className="w-full max-w-md">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl font-bold text-center">
                            Redefinir Senha
                        </CardTitle>
                        <CardDescription className="text-center">
                            Insira sua nova senha
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-4"
                            >
                                <FormField
                                    control={form.control}
                                    name="token"
                                    render={({ field }) => (
                                        <FormItem>
                                            <Label>Token</Label>
                                            <FormControl>
                                                <Input
                                                    type="text"
                                                    placeholder="Copie o token do email"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="newPassword"
                                    render={({ field }) => (
                                        <FormItem>
                                            <Label>Nova Senha</Label>
                                            <FormControl>
                                                <Input
                                                    type="password"
                                                    placeholder="Digite o seu Senha"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="confirmPassword"
                                    render={({ field }) => (
                                        <FormItem>
                                            <Label>Confirmar Senha</Label>
                                            <FormControl>
                                                <Input
                                                    type="password"
                                                    placeholder="Digite o seu Senha"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button
                                    type="submit"
                                    className="w-full bg-blueDark hover:bg-blue-700"
                                    disabled={loginMutation.isPending}
                                >
                                    {loginMutation.isPending ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />{' '}
                                            Entrando...
                                        </>
                                    ) : (
                                        'Entrar'
                                    )}
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                        <Link
                            href="/login"
                            prefetch={false}
                        >
                            <Button variant="link">Voltar para o Login</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
