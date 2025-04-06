'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
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
    RegisterFormValues,
    registerSchema
} from '@/validations/register-schema';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { LogoUFPE } from '@/assets';
import { userService } from '@/services';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { courseList } from '@/utils/course-list';

export default function RegisterPage() {
    const router = useRouter();

    const form = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            course: '',
            email: '',
            password: ''
        }
    });

    const registerMutation = useMutation({
        mutationFn: async (data: RegisterFormValues) => {
            userService.createUser({
                email: data.email,
                password: data.password,
                course: data.course
            });
        },
        onSuccess: () => {
            toast({
                title: 'Cadastro realizado com sucesso!',
                description: 'Você pode '
            });
            router.push('/login');
        },
        onError: () => {
            toast({
                variant: 'destructive',
                title: 'Erro ao criar conta',
                description: 'Verifique seus dados e tente novamente.'
            });
        }
    });

    function onSubmit(data: RegisterFormValues) {
        registerMutation.mutate(data);
    }

    return (
        <div className="flex min-h-screen w-full">
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
                            Criar Conta
                        </CardTitle>
                        <CardDescription className="text-center">
                            Preencha os dados abaixo para se cadastrar
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
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <Label>Senha</Label>
                                            <FormControl>
                                                <Input
                                                    type="password"
                                                    placeholder="Digite sua senha"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Controller
                                    name={'course'}
                                    control={form.control}
                                    render={({ field }) => (
                                        <div className="mt-2">
                                            <Select
                                                {...field}
                                                onValueChange={field.onChange}
                                                value={field.value}
                                            >
                                                <Label>Curso</Label>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Selecione o curso" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {courseList.map(
                                                        (course) => (
                                                            <SelectItem
                                                                key={course}
                                                                value={course}
                                                            >
                                                                {course}
                                                            </SelectItem>
                                                        )
                                                    )}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    )}
                                />
                                <Button
                                    type="submit"
                                    className="w-full bg-blueDark hover:bg-blue-700"
                                    disabled={registerMutation.isPending}
                                >
                                    {registerMutation.isPending ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />{' '}
                                            Cadastrando...
                                        </>
                                    ) : (
                                        'Cadastrar'
                                    )}
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                        <Link href="/login">
                            <Button variant="link">
                                Já tem uma conta? Faça login
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
