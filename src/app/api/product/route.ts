import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Sepatu",
    price: 100000,
    image:
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/03b040ff-bf7e-4619-9fc0-1f8aebd8d6fb/AIR+FORCE+1+%2707+EDGE.png",
  },
  {
    id: 2,
    title: "Baju",
    price: 50000,
    image:
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/03b040ff-bf7e-4619-9fc0-1f8aebd8d6fb/AIR+FORCE+1+%2707+EDGE.png",
  },
  {
    id: 3,
    title: "Nike Zoom Skylon 11",
    price: 199900,
    image:
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c485f8d2-8d54-47f2-9585-24981fd120a6/NIKE+ZOOM+SKYLON+11.png",
  },
  {
    id: 4,
    title: "Nike Air Max Joga Bonito R9",
    price: 199900,
    image:
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1750eb02-9997-4425-9ebe-be4b35cffe55/NIKE+AIR+MAX+JOGA+BONITO+R9.png",
  },
  {
    id: 5,
    title: "Nike Air Max Joga Bonito R9",
    price: 199900,
    image:
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1750eb02-9997-4425-9ebe-be4b35cffe55/NIKE+AIR+MAX+JOGA+BONITO+R9.png",
  },
];
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: {},
    });
  }
  return NextResponse.json({
    status: 200,
    message: "Success",
    data: data,
  });
}
