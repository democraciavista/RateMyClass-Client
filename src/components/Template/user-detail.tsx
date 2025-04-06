'use client';
import { HeaderSection } from '../atom/header-section';
import { UserTabs } from '../organisms/user-tabs';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '@/validations/register-schema';
import {
    Form,
    FormField,
    FormControl,
    FormItem,
    FormMessage
} from '../ui/form';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '../ui/select';
import { courseList } from '@/utils/course-list';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import { userService } from '@/services';
import { useAuth } from '@/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

export const UserDetail = () => {
    const { session } = useAuth();
    const { data: user } = useQuery({
        queryKey: ['userDetail', session?.user?.id],
        enabled: !!session?.user?.id,
        queryFn: () => userService.fetchUserById(session?.user?.id || '')
    });
    const [isEdit, setIsEdit] = useState(false);

    const form = useForm({
        resolver: zodResolver(registerSchema)
    });

    useEffect(() => {
        if (user) {
            form.reset({
                email: user.email,
                password: user.password,
                course: user.course
            });
        }
    }, [user, form]);

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <HeaderSection text="Configurações" />
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit((data) =>
                            console.log(data)
                        )}
                        className="space-y-4 col-span-3"
                    >
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <Label>Email</Label>
                                    <FormControl>
                                        <Input
                                            disabled={!isEdit}
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
                                            disabled={!isEdit}
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
                                        <SelectTrigger disabled={!isEdit}>
                                            <SelectValue placeholder="Selecione o curso" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {courseList.map((course) => (
                                                <SelectItem
                                                    key={course}
                                                    value={course}
                                                >
                                                    {course}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            )}
                        />
                    </form>
                </Form>
                <div className="col-span-3 flex items-center justify-end gap-4">
                    <Button
                        type="button"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        onClick={() => setIsEdit(true)}
                    >
                        Editar
                    </Button>
                    <Button
                        disabled={!isEdit}
                        type="submit"
                        variant={'outline'}
                        className=" text-black px-4 py-2 rounded"
                    >
                        Salvar
                    </Button>
                </div>
            </div>
            <UserTabs reviews={user?.reviews || []} />
        </div>
    );
};
