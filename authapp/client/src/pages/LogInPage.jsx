import React, { useState } from "react";
import { Button } from "../components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import {
    Tabs,
    TabsContent,
    TabsTrigger,
    TabsList,
} from "../components/ui/tabs";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LogInPage = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const handelRegister = async () => {
        if (!userName || !password) return alert("All Fields Are Required");
        try {
            const res = await axios.post(
                "http://localhost:8080/api/v1/auth/register",
                { userName, password }
            );
            if (!res.error.success) return alert(res.data.msg);
            else {
                return alert(res.data.msg);
            }
        } catch (error) {
            const errMsg = error.response?.data.msg || "SomeThing Went Wrong";
            alert(errMsg);
        }
    };
    const handelLogin = async () => {
        if (!userName || !password) return alert("All Fields Are Required");
        try {
            const res = await axios.post("http://localhost:8080/api/v1/auth/login", {
                userName,
                password,
            }, { withCredentials: true },);

            alert(res.data.msg);
            navigate('/')
        } catch (error) {
            console.log(error);
            const errMsg = error.response?.data.msg || "SomeThing Went Wrong";
            alert(errMsg);
        }
    };
    return (
        <div className="w-screen h-screen flex items-center justify-center px-10 md:px-0">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <Tabs>
                    <TabsList className={"w-full bg-white"}>
                        <div>
                            <TabsTrigger value="Register">Register</TabsTrigger>
                            <TabsTrigger value="Login">Login</TabsTrigger>
                        </div>
                    </TabsList>
                    <TabsContent value="Register">
                        <Card>
                            <CardHeader>
                                <CardTitle>Register</CardTitle>
                                <CardDescription>
                                    Create a new account by filling in the details below.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="tabs-demo-name">User Name</Label>
                                    <Input
                                        onChange={(e) => setUserName(e.target.value)}
                                        id="tabs-demo-name"
                                        placeholder="Pedro Duarte"
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="tabs-demo-username">Password</Label>
                                    <Input
                                        onChange={(e) => setPassword(e.target.value)}
                                        id="tabs-demo-username"
                                        type="password"
                                        placeholder="@peduarte"
                                    />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button onClick={handelRegister}>Register</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="Login">
                        <Card>
                            <CardHeader>
                                <CardTitle>Login</CardTitle>
                                <CardDescription>
                                    Enter your credentials to access your account.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="tabs-demo-current">User Name</Label>
                                    <Input
                                        onChange={(e) => setUserName(e.target.value)}
                                        id="tabs-demo-current"
                                        placeholder="Pedro Duarte"
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="tabs-demo-new">Password</Label>
                                    <Input
                                        onChange={(e) => setPassword(e.target.value)}
                                        id="tabs-demo-new"
                                        type="password"
                                        placeholder="@peduarte"
                                    />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button onClick={handelLogin}>Login</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default LogInPage;
