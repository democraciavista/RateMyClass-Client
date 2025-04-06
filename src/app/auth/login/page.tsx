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
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import { toast } from '../../../hooks/use-toast';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { LogoUFPE } from '@/assets';
import { LoginFormValues, loginSchema } from '@/validations/login-schema';

export default function LoginPage() {
    const router = useRouter();
    const params = useSearchParams();
    const callbackUrl = params.get('callbackUrl') || '/';

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const loginMutation = useMutation({
        mutationFn: async (data: LoginFormValues) => {
            const result = await signIn('credentials', {
                redirect: false,
                email: data.email,
                password: data.password
            });

            if (result?.error) {
                throw new Error(result.error);
            }

            return result;
        },
        onSuccess: () => {
            toast({
                title: 'Login realizado com sucesso!'
            });
            if (callbackUrl) {
                router.push(callbackUrl as string);
            } else {
                router.push('/');
            }
        },
        onError: (error) => {
            toast({
                variant: 'destructive',
                title: 'Erro ao fazer login',
                description:
                    error.message ||
                    'Verifique suas credenciais e tente novamente.'
            });
        }
    });

    function onSubmit(data: LoginFormValues) {
        loginMutation.mutate(data);
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
                            Login
                        </CardTitle>
                        <CardDescription className="text-center">
                            Entre com suas credenciais para acessar o sistema
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
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <Label>Email</Label>
                                            <FormControl>
                                                <Input
                                                    placeholder="Digite o seu Email"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <Label>Senha</Label>
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
                                <div className="flex justify-between items-center text-sm">
                                    <Link
                                        prefetch={false}
                                        href="/auth/esqueceu-senha"
                                        className="text-blueDark hover:underline"
                                    >
                                        Esqueceu sua Senha?
                                    </Link>
                                    <Link
                                        prefetch={false}
                                        href="/auth/autenticar"
                                        className="text-blueDark hover:underline"
                                    >
                                        Primeiro Acesso? Clique aqui
                                    </Link>
                                    <Link
                                        prefetch={false}
                                        href="auth/cadastro"
                                        className="text-blueDark hover:underline"
                                    >
                                        Não tem uma conta? Cadastre-se
                                    </Link>
                                </div>
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
                </Card>
            </div>
        </div>
    );
}
