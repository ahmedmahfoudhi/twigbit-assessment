import { NextResponse } from 'next/server';
import { getPrismaClient } from '@/utils/db';
export const GET = async () => {
    try {
        const prisma = getPrismaClient();
        const products: Product[] = await prisma.product.findMany();
        return NextResponse.json(products || []);
        
    } catch (error) {
        console.error('Error fetching products:', error);
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    }
}