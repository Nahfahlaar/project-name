'use client';
import Logo from '@/app/components/Header/Logo';
import HeaderBurger from '@/app/components/Header/header-burger';
import ButtonCart from '@/app/components/Header/button-cart';
import HeaderNav from '@/app/components/Header/header-nav';
import Header from '../components/Header/header';
import Hero from '../components/Hero/hero';
import ModelsCard from '../components/Models/models-card';
import Models from '../components/Models/models';

export default function DevPage() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-50">
            <Models />
        </div>
    );
}
