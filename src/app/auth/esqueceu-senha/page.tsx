    'use client';

    import Link from 'next/link';
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
    } from '@/components/ui/form';
    import {
        Card,
        CardContent,
        CardDescription,
        CardHeader,
        CardTitle,
        CardFooter
    } from '@/components/ui/card';
    import { toast } from '../../../hooks/use-toast';
    import {
        ResetPasswordFormValues,
        resetPasswordSchema
    } from '@/validations/reset-password';
    import Image from 'next/image';
    import { LogoUFPE } from '@/assets';
    import { Label } from '@/components/ui/label';
    import { userService } from '@/services';

    export default function ResetPasswordPage() {
        const form = useForm<ResetPasswordFormValues>({
            resolver: zodResolver(resetPasswordSchema),
            defaultValues: {
                email: ''
            }
        });

        const resetPasswordMutation = useMutation({
            mutationFn: async () => {
                return userService.resetPassword({
                    email: form.getValues('email') || ''
                });
            },
            onSuccess: () => {
                toast({
                    title: 'Solicitação enviada',
                    description: 'Verifique seu email para redefinir sua senha.'
                });
            },
            onError: () => {
                toast({
                    variant: 'destructive',
                    title: 'Erro ao enviar solicitação',
                    description: 'Verifique seu email e tente novamente.'
                });
            }
        });

        function onSubmit(data: ResetPasswordFormValues) {
            resetPasswordMutation.mutate();
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
                                Recuperar Senha
                            </CardTitle>
                            <CardDescription className="text-center">
                                Insira seu email para receber um token de
                                recuperação de senha
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
                                                        placeholder="Digite seu email"
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
                                        disabled={
                                            resetPasswordMutation.isPending
                                        }
                                    >
                                        {resetPasswordMutation.isPending ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />{' '}
                                                Enviando...
                                            </>
                                        ) : (
                                            'Enviar Token de Recuperação'
                                        )}
                                    </Button>
                                </form>
                            </Form>
                        </CardContent>
                        <CardFooter className="flex justify-center">
                            <Link
                                href="/auth/login"
                                prefetch={false}
                            >
                                <Button variant="link">
                                    Voltar para o Login
                                </Button>
                            </Link>
                            <Link
                                href={'/auth/nova-senha'}
                                prefetch={false}
                            >
                                <Button variant="link">Possui o Token?</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        );
    }
