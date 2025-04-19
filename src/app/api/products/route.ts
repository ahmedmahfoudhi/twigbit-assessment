import { NextRequest, NextResponse } from 'next/server';
import { getPrismaClient } from '@/utils/db';
export const GET = async (req: NextRequest) => {
    const searchParams = req.nextUrl.searchParams
    const rawSearch = searchParams.get('search')
    const search = rawSearch ? rawSearch.trim().toLowerCase() : null
    

    try {
        const prisma = getPrismaClient();
        const products: Product[] = await prisma.product.findMany(
            {
                where: {
                    name: {
                        contains: search || undefined,
                    },
                }
            }
        );
        return NextResponse.json(products || []);
        
    } catch (error) {
        console.error('Error fetching products:', error);
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    }
}