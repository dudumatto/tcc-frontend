// Auth.jsx
import React, { useState } from "react";

import {
  FiMail,
  FiLock,
  FiCheck,
  FiUser,
  FiBookOpen,
  FiList,
} from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import Input from "../components/Input";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("Estudante");

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    universidade: "",
    curso: "",
    senha: "",
    confirmarSenha: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) newErrors.email = "O email é obrigatório";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Email inválido";

    if (!formData.senha) newErrors.senha = "A senha é obrigatória";

    if (!isLogin) {
      if (!formData.nome) newErrors.nome = "O nome é obrigatório";
      if (!formData.universidade)
        newErrors.universidade = "A universidade é obrigatória";
      if (!formData.curso) newErrors.curso = "O curso é obrigatório";
      if (formData.senha !== formData.confirmarSenha) {
        newErrors.confirmarSenha = "As senhas não coincidem";
      }
      if (formData.senha && formData.senha.length < 8) {
        newErrors.senha = "A senha não atende aos requisitos mínimos";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", { isLogin, role, ...formData });
    }
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setFormData({
      nome: "",
      email: "",
      universidade: "",
      curso: "",
      senha: "",
      confirmarSenha: "",
    });
  };

  const cursoOptions = [
    { value: "ciencia_computacao", label: "Ciência da Computação" },
    { value: "engenharia", label: "Engenharia" },
    { value: "biologia", label: "Biologia" },
    { value: "medicina", label: "Medicina" },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans text-gray-900 selection:bg-gray-300">
      {/* Lado Esquerdo - Escuro */}
      <div className="hidden md:flex w-1/2 bg-[#111111] text-white p-12 lg:p-20 flex-col justify-center relative overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg
            className="absolute left-0 top-1/4 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 Q25,25 50,50 T100,50 L100,100 L0,100 Z"
              fill="transparent"
              stroke="#ffffff"
              strokeWidth="0.5"
            />
            <path
              d="M0,70 Q30,40 60,70 T100,70 L100,100 L0,100 Z"
              fill="transparent"
              stroke="#ffffff"
              strokeWidth="0.2"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-lg">
          <h1 className="text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            Comece a organizar suas ideias científicas hoje
          </h1>
          <p className="text-gray-400 text-lg mb-10">
            Gerencie projetos, descubra pesquisas e colabore com outros
            estudantes.
          </p>

          <ul className="space-y-4">
            {[
              "Organize seus projetos.",
              "Divulgue e descubra novas ideias.",
              "Conecte-se com outros estudantes.",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center text-gray-300 text-lg"
              >
                <FiCheck className="text-white mr-4" size={24} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex w-full md:w-1/2 bg-[#f8f9fa] items-center justify-center p-6 sm:p-12 relative min-h-screen">
        <div className="absolute top-8 right-8 hidden sm:block">
          <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center">
            <div className="w-3 h-3 border-2 border-white rounded-sm"></div>
          </div>
        </div>

        {/* Card de Autenticação */}
        <div
          className={`w-full max-w-md ${isLogin ? "bg-[#f4f4f5] border border-gray-200 shadow-sm p-8 rounded-3xl" : "bg-transparent"}`}
        >
          <h2 className="text-2xl font-medium text-center mb-8">
            {isLogin ? "Acesse sua conta" : "Inscreva-se na CollabResearch"}
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col">
            {!isLogin && (
              <div className="flex bg-white border border-gray-200 p-1 rounded-xl mb-6">
                <button
                  type="button"
                  onClick={() => setRole("Estudante")}
                  className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all ${
                    role === "Estudante"
                      ? "bg-[#2A2A2A] text-white shadow-sm"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  Estudantes
                </button>
                <button
                  type="button"
                  onClick={() => setRole("Orientador")}
                  className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all ${
                    role === "Orientador"
                      ? "bg-[#2A2A2A] text-white shadow-sm"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  Orientador
                </button>
              </div>
            )}

            {!isLogin && (
              <Input
                icon={FiUser}
                name="nome"
                placeholder="Nome Completo"
                value={formData.nome}
                onChange={handleChange}
                error={errors.nome}
              />
            )}

            <Input
              icon={FiMail}
              type="email"
              name="email"
              placeholder="Endereço de Email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />

            {!isLogin && (
              <>
                <Input
                  icon={FiBookOpen}
                  name="universidade"
                  placeholder="Universidade"
                  value={formData.universidade}
                  onChange={handleChange}
                  error={errors.universidade}
                />
                <Input
                  icon={FiList}
                  type="select"
                  name="curso"
                  placeholder="Curso"
                  options={cursoOptions}
                  value={formData.curso}
                  onChange={handleChange}
                  error={errors.curso}
                />
              </>
            )}

            <Input
              icon={FiLock}
              type="password"
              name="senha"
              placeholder="Senha"
              value={formData.senha}
              onChange={handleChange}
              error={errors.senha}
            />

            {!isLogin && (
              <>
                <p className="text-[11px] text-gray-500 leading-tight mt-[-8px] mb-4 px-1">
                  A senha deve ter no mínimo 15 caracteres OU no mínimo 8
                  caracteres, incluindo um número e uma letra minúscula.
                </p>
                <Input
                  icon={FiLock}
                  type="password"
                  name="confirmarSenha"
                  placeholder="Confirme sua senha"
                  value={formData.confirmarSenha}
                  onChange={handleChange}
                  error={errors.confirmarSenha}
                />
              </>
            )}

            {isLogin && (
              <div className="mb-6 mt-[-8px] text-center">
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Esqueceu sua senha?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#2A2A2A] hover:bg-black text-white py-2.5 rounded-lg font-medium transition-colors mb-6"
            >
              {isLogin ? "Entrar" : "Continuar"}
            </button>

            {isLogin && (
              <p className="text-xs text-center text-gray-500 mb-6">
                Ao continuar, você reconhece os{" "}
                <a href="#" className="underline">
                  Termos de Uso
                </a>{" "}
                da CollabResearch.
              </p>
            )}

            <div className="relative flex items-center justify-center mb-6">
              <div className="absolute w-full border-t border-gray-300"></div>
              <span className="bg-[#f8f9fa] px-3 text-xs text-gray-400 uppercase tracking-widest relative z-10">
                OU
              </span>
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-2.5 rounded-lg font-medium transition-colors mb-6 shadow-sm"
            >
              <FcGoogle className="mr-2" size={20} />
              Continuar com o Google
            </button>

            {!isLogin && (
              <p className="text-xs text-center text-gray-500 mb-6">
                Ao continuar, você reconhece os{" "}
                <a href="#" className="underline">
                  Termos de Uso
                </a>{" "}
                da CollabResearch.
              </p>
            )}

            <p className="text-center text-sm text-gray-600">
              {isLogin ? "Não tem uma conta? " : "Já tem uma conta? "}
              <button
                type="button"
                onClick={switchMode}
                className="text-blue-600 hover:underline font-medium focus:outline-none"
              >
                {isLogin ? "Cadastre-se" : "Entrar"}
              </button>
            </p>
          </form>
        </div>

        {/* Rodapé de links */}
        <div className="absolute bottom-6 w-full flex justify-center md:justify-end md:right-12 gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-800 transition-colors">
            Termos
          </a>
          <a href="#" className="hover:text-gray-800 transition-colors">
            Privacidade
          </a>
          <a href="#" className="hover:text-gray-800 transition-colors">
            Gerenciar Cookies
          </a>
          <a
            href="#"
            className="hover:text-gray-800 transition-colors hidden sm:block"
          >
            Suporte CollabResearch
          </a>
        </div>
      </div>
    </div>
  );
}
